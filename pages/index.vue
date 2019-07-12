<template>
  <!-- 首页中间部分 -->
  <div class="container">
    <!-- 实现图片轮播 -->
    <el-carousel :interval="5000" arrow="always" trigger="click">
      <el-carousel-item v-for="(item,index) in banners" :key="index">
        <div class="banner-image" :style="`background: url(${$axios.defaults.baseURL + item.url}) center no-repeat;background-size:contain contain`"></div>
      </el-carousel-item>
    </el-carousel>
    <!-- 实现搜索栏 -->
    <div class="banner-content">
      <div class="search-bar">
        <!-- tab栏 -->
        <el-tabs>
          <el-row type="flex" class="search-tab">
            <span v-for="(item,index) in tabs" :key="index" @click="handleClick(index)" :class="{active:index === current}"><i>{{item.title}}</i></span>
          </el-row>
          <el-row type="flex" align="middle" class="search-input">
            <input :placeholder="tabs[current].placeholder" v-model="search" @keyup.enter="handleSearch">
            <i class="el-icon-search" @click="handleSearch"></i>
          </el-row>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 轮播图片数组
      banners: [],
      // tab栏信息
      tabs: [
        {title: '攻略', placeholder: '搜索城市', pageUrl: '/post?city='},
        {title: '酒店', placeholder: '请输入城市搜索酒店', pageUrl: '/hotel?city='},
        {title: '机票', placeholder: '', pageUrl: '/air'}
      ],
      // 设置当前索引
      current: 0,
      // 搜索框的值
      search: ''
    }
  },
  mounted () {
    // 请求轮播图图片
    this.$axios({
      url: '/scenics/banners'
    }).then(res => {
      const {data} = res.data
      this.banners = data
    })
  },
  methods: {
    // 实现点击机票跳转页面
    handleClick(index) {
      if (index === 2) {
        this.$router.push(this.tabs[index].pageUrl);
      }
      this.current = index;
    },
    // 实现搜索框跳转页面
    handleSearch() {
      this.$router.push(this.tabs[this.current].pageUrl + this.search);
    }
  }
}
</script>

<style lang="less" scoped>
 .container{
  min-width:1000px;
  margin:0 auto;
  position:relative;

  /deep/ .el-carousel__container{
    height:700px;
  }

  .banner-image{
    width:100%;
    height:100%;
  }
  // 搜索框
  .banner-content {
    width: 1000px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    z-index: 9;
    .search-bar {
      width: 552px;
      margin: 0 auto;
      .active{
        i{
        color:#333;
        }
        &::after{
        background: #eee;
        }
      }
      span {
        position: relative;
        display: block;
        width: 82px;
        height: 36px;
        line-height: 36px;
        margin-right: 8px;
        cursor: pointer;
        i {
          position: absolute;
          display: block;
          width: 100%;
          color: #fff;
          text-align: center;
          z-index: 2;
        }
        &:after {
          position: absolute;
          content: '';
          top: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 100%;
          border: 1px rgba(255,255,255,.2) solid;
          transform: scale(1.1,1.3) perspective(0.7em) rotateX(2.2deg);
          transform-origin: bottom left;
          background: rgba(0,0,0,0.5);
          border-radius: 1px 2px 0 0;
          box-sizing: border-box;
        }
      }
    }
    .search-input {
      width: 550px;
      height: 46px;
      background-color: #fff;
      border-radius: 0 5px 5px 5px;
      input {
        width: 508px;
        height: 46px;
        padding: 13px 15px;
        box-sizing: border-box;
        outline: none;
        border: 0;
        border-radius: 0 0 0 5px;
      }
      .el-icon-search {
        cursor: pointer;
        font-size: 22px;
        padding: 0 10px;
        font-weight: 700;
      }
    }
  }

}
</style>


