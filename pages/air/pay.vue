<template>
  <div class="container" v-loading="loading">
    <div class="pay">
      <div class="pay-title">
        支付总金额<span class="pay-price">￥{{Number(price).toFixed(2)}}</span>
      </div>
      <div class="pay-main">
        <h1>微信支付</h1>
        <el-row type="flex" justify="space-between" align="middle">
          <!-- 二维码 -->
          <div class="qrcode">
            <canvas id="qrcode-stage"></canvas>
            <p>请使用微信扫一扫</p>
            <p>扫描二维码支付</p>
          </div>
          <!-- 教程图片 -->
          <div class="pay-example">
            <img src="http://157.122.54.189:9093/images/wx-sweep2.jpg" alt="">
          </div>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
// 生成二维码的包
import QRCode from "qrcode"
export default {
  data() {
    return {
      loading: true,
      price: 0,
      timer: null
    }
  },
  mounted () {
    setTimeout(() => {
      this.loading = false
    },1000)
    // 获取订单详情
    setTimeout(() => {
      // 获取路由传递的id
      const { id } = this.$route.query;
      // 获取store中的用户信息
      const { user: {userInfo} } = this.$store.state;
      // 请求二维码
      this.$axios({
        url: `/airorders/${id}`,
        // 在请求头设置token
        headers: {
          Authorization: `Bearer ${userInfo.token}`
        }
      })
      .then(res => {
        console.log(res)
        // 获取二维码信息与价格
        const {payInfo , price} = res.data
        this.price = price
        // 生成二维码到canvas中
        const stage = document.querySelector('#qrcode-stage');
        QRCode.toCanvas(stage,payInfo.code_url, {
          width: 200
        })
        this.timer = setInterval(async () => {
          const isResolve = await this.isPay(payInfo);
          console.log(isResolve)
          if (isResolve) {
            clearInterval(this.timer)
            return;
          }
        },3000)
      })
    },200)
  },
  methods: {
    // 检查付款状态
    async isPay(data) {
      const { id } = this.$route.query;
      const { api,user: {userInfo} } = this.$$store.state;
      return this.$axios({
        url: '/airorders/pay',
        method: 'POST',
        data: {
          id, // 订单编号
          nonce_str: data.nonce_str,
          out_trade_no: data.order_no  // 订单编号(带字母)
        },
        headers: {
          Authorization: `Bearer ${userInfo.token}`
        }
      })
      .then(res => {
        console.log(res)
        const {statusTxt} = res.data;
        if (statusTxt === '支付完成') {
          this.$confirm('订单支付成功','提示', {
            confirmButtonText: '确定',
            showCancelButton: false,
            type: 'success'
          });
          return Promise.resolve(true);
        }
        return Promise.resolve(false)
      })
    }
  },
  destroyed(){
    clearInterval(this.timer)
  }
}
</script>

<style lang="less" scoped>
  .container {
    background-color: #f5f5f5;
    padding: 30px 0;
    .pay {
      width: 1000px;
      margin: 0 auto;
      .pay-title {
        text-align: right;
        .pay-price {
          font-size: 28px;
          color: #ff4500;
        }
      }
      .pay-main {
        padding: 30px;
        margin-top: 10px;
        background-color: #fff;
        border-top: 5px solid orange;
        h1 {
          font-size: 28px;
          font-weight: normal;
        }
        .el-row {
          padding: 0 80px;
          .qrcode {
            padding: 15px;
            border: 1px solid #ddd;
            text-align: center;
            canvas {
              width: 200px;
              height: 200px;
            }
            p {
              height: 32px;
              line-height: 32px;
            }
          }
        }
      }
    }
  }

</style>


