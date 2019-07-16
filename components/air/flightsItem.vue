<template>
  <div class="flight">
    <!-- 机票信息 -->
    <el-row type="flex" justify="space-between" align="middle" class="flight-item" @click="handleShowRecommend">
      <el-col>{{data.airline_name}}  {{data.flight_no}}</el-col>
      <el-col>
        <strong>{{data.dep_time}}</strong>
        <span class="airport">{{data.org_airport_name}}{{data.org_airport_query}}</span>
      </el-col>
      <el-col>
        <span class="time">2时20分</span>
      </el-col>
      <el-col>
        <strong>{{data.arr_time}}</strong>
        <span class="airport">{{data.dst_airport_name}}{{data.dst_airport_query}}</span>
      </el-col>
      <el-col>￥<span class="sell-price">{{data.seat_infos[0].org_settle_price_child}}</span>起</el-col>
    </el-row>
    <!-- 推荐机票 -->
    <div class="flight-recommend" v-if="showRecommend">
      <el-row type="flex" justify="space-between" align="middle">
        <el-col :span="4">低价推荐</el-col>
        <el-col :span="20">
          <el-row type="flex" justify="space-between" align="middle" class="cheap-flights" v-for="(item, index) in data.seat_infos" :key="index">
            <el-col :span="12" class="airline"><span>{{item.name}}</span> | {{item.supplierName}}</el-col>
            <el-col :span="6" class="price">￥{{item.settle_price}}</el-col>
            <el-col :span="4">
              <el-button size="small" type="warning">选定</el-button>
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
  methods: {
    handleShowRecommend() {
      console.log(123)
      this.showRecommend = !this.showRecommend
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


