<template>
  <div class="orderAside">
    <div class="air-info">
      <el-row class="place" type="flex" justify="space-between">
        <div>{{data.dep_date}}</div>
        <div>{{data.org_city_name}} - {{data.dst_city_name}}</div>
      </el-row>
      <el-row class="info" type="flex" justify="space-between" align="middle">
        <div class="to">
          <strong>{{data.dep_time}}</strong>
          <div style="margin-top: 5px;">{{data.org_airport_name + data.org_airport_quay}}</div>
        </div>
        <div class="when">
          <div>--- {{rankTime}} ---</div>
          <div>{{data.airline_name}}{{data.flight_no}}</div>
        </div>
        <div class="from">
          <strong>{{data.arr_time}}</strong>
          <div style="margin-top: 5px;">{{data.dst_airport_name + data.dst_airport_quay}}</div>
        </div>
      </el-row>
      <el-row class="title" type="flex" justify="space-between">
        <div>订单总价</div>
        <div>金额</div>
        <div>数量</div>
      </el-row>
      <el-row class="ticket" type="flex" justify="space-between">
        <div>成人机票</div>
        <div>￥{{data.seat_infos.org_settle_price}}</div>
        <div>×1</div>
      </el-row>
      <el-row class="other" type="flex" justify="space-between">
        <div>机建 + 燃油</div>
        <div>￥{{data.airport_tax_audlet}}/人/单程</div>
        <div>×1</div>
      </el-row>
      <el-row class="total" type="flex" justify="space-between">
        <div>应付总额：</div>
        <!-- 使用父组件传递的参数 -->
        <!-- <span>￥{{allPrice}}</span> -->
        <!-- 使用store的数据 -->
        <span>￥{{$store.state.air.allPrice}}</span>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: {}
    },
    allPrice: {
      type: Number, // 总价格是数字格式
      default: 0  // 给一个默认值为0
    }
  },
  computed: {
    // 计算时间差
    rankTime() {
      // 数据还未请求回来
      if(!this.data.dep_time) return "";
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
  }
}
</script>

<style lang="less" scoped>
  .orderAside {
    width: 350px;
    padding-top: 10px;
    font-size: 14px;
    border: 1px solid #ddd;
    margin-top: 20px;
    box-sizing: border-box;
    .info {
      strong {
        font-size: 22px;
        font-weight: 400;
        margin-top: 5px;
      }
      .to,
      .when,
      .from {
        div {
          color: #999;
          font-size: 12px;
        }
      }
    }
    .el-row {
      padding: 10px 20px;
      border-top: 1px dashed #ddd;
      color: #666;
      &:nth-child(1) {
        padding-bottom: 0;
      }
      &:nth-child(-n+2) {
        border-top: none;
        color: #000;
      }
      &:last-child {
        padding: 20px;
      }
    }
    .total {
      span {
        font-size: 28px;
        color: orange;
      }
    }
  }
</style>


