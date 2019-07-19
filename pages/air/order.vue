<template>
  <div class="order">
    <el-row type="flex" justify="space-between">
      <!-- 订单表单 -->
      <div class="main">
        <!-- 在父组件中获取数据传递给子组件 -->
        <OrderForm :data="infoData" @setAllPrice="setAllPrice"/>
      </div>
      <!-- 侧边栏 -->
      <div class="aside">
        <OrderAside :data="infoData" :allPrice="allPrice"/>
      </div>
    </el-row>
  </div>
</template>

<script>
// 引入订单表单组件
import OrderForm from '@/components/air/orderForm'
// 引入侧边栏
import OrderAside from '@/components/air/orderAside'
export default {
  components: {
    OrderForm,
    OrderAside
  },
  data() {
    return {
      infoData: {
        // 初始化保险数据
        insurances: [],
        seat_infos: {},
      },
      allPrice: 0
    }
  },
  mounted () {
    // 请求机票信息
    const { query } = this.$route;
    console.log(query)
    this.$axios({
      url: `/airs/${query.id}`,
      params: {
        seat_xid: query.seat_xid
      }
    })
    .then(res => {
      console.log(res)
      this.infoData = res.data
    })
    .catch(err => {
      console.log(err)
    })
  },
  methods: {
    // 计算总价
    setAllPrice(price) {
      this.allPrice = price;
    }
  }
}
</script>

<style lang="less" scoped>
  .order {
    width: 1000px;
    margin: 10px auto;
  }
</style>


