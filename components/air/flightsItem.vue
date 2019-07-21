<template>
  <div class="flight">
    <!-- 机票信息 -->
    <el-row type="flex" justify="space-between" align="middle" class="flight-item" @click.native="showRecommend = !showRecommend">
      <el-col>{{data.airline_name}}  {{data.flight_no}}</el-col>
      <el-col>
        <strong>{{data.dep_time}}</strong>
        <span class="airport">{{data.org_airport_name}}{{data.org_airport_query}}</span>
      </el-col>
      <el-col>
        <span class="time">{{rankTime}}</span>
      </el-col>
      <el-col>
        <strong>{{data.arr_time}}</strong>
        <span class="airport">{{data.dst_airport_name}}{{data.dst_airport_query}}</span>
      </el-col>
      <el-col>￥<span class="sell-price">{{data.base_price / 2}}</span>起</el-col>
    </el-row>
    <!-- <el-row v-if="total === 0">暂无航班数据</el-row> -->
    <!-- 推荐机票 -->
    <div class="flight-recommend" v-if="showRecommend">
      <el-row type="flex" justify="space-between" align="middle">
        <el-col :span="4">低价推荐</el-col>
        <el-col :span="20">
          <el-row type="flex" justify="space-between" align="middle" class="cheap-flights" v-for="(item, index) in data.seat_infos" :key="index">
            <el-col :span="12" class="airline"><span>{{item.name}}</span> | {{item.supplierName}}</el-col>
            <el-col :span="6" class="price">￥{{item.settle_price}}</el-col>
            <el-col :span="4">
              <el-button size="small" type="warning" @click="handleToOrder(data.id,item.seat_xid)">选定</el-button>
              <p>剩余 : {{item.discount}}</p>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 用对象的方式便于维护
    data: {
      type: Object,
      default: {},
    }
  },
  data() {
    return {
      showRecommend: false
    }
  },
  computed: {
    // 计算时间差
    rankTime() {
      // 如果数据还没获取到先给一个空对象
      if (!this.data.dep_time) return '';
      // 起飞时间
      const dep = this.data.dep_time.split(':');
      // 到达时间
      const arr = this.data.arr_time.split(':');
      // 将时间转换为分钟
      const depVal = dep[0] * 60 + +dep[1];
      const arrVal = arr[0] * 60 + +arr[1];
      // 求出相差分钟数
      let dis = arrVal - depVal;
      // 判断是否为凌晨时间
      if (dis < 0) {
        dis = arrVal + 24 * 60 - depVal;
      }
      // 返回时间
      return `${Math.floor(dis / 60)}时${dis % 60}`;
    }
  },
  methods: {
    // 实现点击列表展开隐藏列表数据
    // handleShowRecommend() {
    //   this.showRecommend = !this.showRecommend
    // },
    // 点击选定跳转到订单页面
    handleToOrder(id,seat_xid) {
      // 跳转到订单页面
      this.$router.push({
        path: '/air/order',
        query: {
          id,
          seat_xid
        }
      })
    },
    // 实现点击列表展开隐藏列表数据
    changeShow() {
      this.showRecommend = false
    }
  }
}
</script>

<style lang="less" scoped>
  .flight {
    border: 1px solid #ddd;
    margin-bottom: 10px;
    .flight-item {
      padding: 20px 0;
      cursor: pointer;
      .el-col {
        text-align: center;
        font-size: 14px;
        strong {
          display: block;
          font-size: 24px;
          font-weight: 400;
        }
        .airport {
          font-size: 12px;
          color: #999;
        }
        .time {
          padding: 10px 0;
          color: #999;
          border-bottom: 1px solid #eee;
        }
        .sell-price {
          font-size: 24px;
          color: orange;
        }
      }
    }
    .flight-recommend {
      padding: 10px;
      text-align: center;
      border-top: 1px solid #eee;
      background-color: #f6f6f6;
      .cheap-flights {
        border-bottom: 1px solid #eee;
        padding-bottom: 5px;
        margin: 10px 0;
        &:last-child {
          border-bottom: none;
        }
        .airline {
          font-size: 12px;
          > span {
            color: #008000;
          }
        }
        .price {
          font-size: 20px;
          color: orange;
        }
        p {
          font-size: 14px;
          color: #666;
          margin-top: 5px;
        }
      }
    }
  }
</style>


