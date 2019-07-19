<template>
  <!-- 过滤筛选组件 -->
  <div class="filters">
    <!-- 单程 -->
    <el-row class="flights top" type="flex" justify="space-between">
      <el-col :span="8" style="font-size: 14px;">
        <span>单程：</span>
        <span>{{data.info.departCity}} - {{data.info.destCity}} / {{data.info.departDate}}</span>
      </el-col>
      <!-- 起飞机场 -->
      <el-col :span="4" style="margin-right: 10px">
        <el-select v-model="airport" size="mini" placeholder="起飞机场" @change="handleAirport">
          <el-option v-for="(item,index) in data.options.airport" :key="index" :label="item" :value="item"></el-option>
        </el-select>
      </el-col>
      <!-- 起飞时间 -->
      <el-col :span="4" style="margin-right: 10px">
        <el-select v-model="flightTimes" size="mini" placeholder="起飞时间" @change="handleFlightTimes">
          <el-option v-for="(item,index) in data.options.flightTimes" :key="index" :label="`${item.from}:00 - ${item.to}:00`" :value="`${item.from},${item.to}`"></el-option>
        </el-select>
      </el-col>
      <!-- 航空公司 -->
      <el-col :span="4" style="margin-right: 10px">
        <el-select v-model="company" size="mini" placeholder="航空公司" @change="handleCompany">
          <el-option v-for="(item,index) in data.options.company" :key="index" :label="item" :value="item"></el-option>
        </el-select>
      </el-col>
      <!-- 机型 -->
      <el-col :span="4">
        <el-select v-model="airSize" size="mini" placeholder="机型" @change="handleAirSize">
          <el-option v-for="(item,index) in airSizeList" :key="index" :label="item.value" :value="item.size"></el-option>
        </el-select>
      </el-col>
    </el-row>
    <!-- 筛选 -->
    <el-row class="flights-cancel" style="font-size: 14px;">
      筛选
      <el-button type="primary" size="small" plain round @click="handleCancel">撤销</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      airport: '',
      flightTimes: '',
      company: '',
      airSize: '',
      airSizeList: [
        {value: '大',size: 'L'},
        {value: '中',size: 'M'},
        {value: '小',size: 'S'}
      ]
    }
  },
  // 获取父组件数据
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  methods: {
    // 起飞机场
    handleAirport(value) {
      console.log(value)
      const arr = this.data.flights.filter(v => {
        return v.org_airport_name = value
      })
      this.$emit('changeFlights',arr)
    },
    // 起飞时间
    handleFlightTimes(value) {
      console.log(value)
      const [ from,to ] = value.split(',');
      const arr = this.data.flights.filter(v => {
        const [ start ] = v.dep_time .split(':')
        return +from <= +start && +start < +to
      })
      this.$emit('changeFlights',arr)
    },
    // 航空公司
    handleCompany(value) {
      console.log(value)
      const arr = this.data.flights.filter(v => {
        return v.airline_name === value
      })
      this.$emit('changeFlights',arr)
    },
    // 机型
    handleAirSize(value) {
      console.log(value)
      const arr = this.data.flights.filter(v => {
        return v.plane_size === value
      })
      this.$emit('changeFlights',arr)
    },
    // 撤销
    handleCancel() {
      this.airport = '';
      this.flightTimes = '';
      this.company = '';
      this.airSize = '';
      this.$emit('changeFlights',this.data.flights);
    }
  }
}
</script>

<style lang="less" scoped>

</style>


