<template>
  <div class="aside">
    <div class="top">
      <el-row type="flex" justify="space-between" class="sever">
        <el-col>
          <i class="iconfont iconweibiaoti-_huabanfuben" style="color:#409EFF;"></i>
          <span>航协认证</span>
        </el-col>
        <el-col>
          <i class="iconfont iconbaozheng" style="color: green;"></i>
          <span>出行保证</span>
        </el-col>
        <el-col>
          <i class="iconfont icondianhua" style="color:#409EFF;"></i>
          <span>7×24</span>
        </el-col>
      </el-row>
      <p>免费客服电话：4006345678转2</p>
    </div>
    <div class="bottom">
      <h4>历史查询</h4>
      <el-row type="flex" justify="space-between">
        <div class="air-info">
          <div class="to-form">广州 - 上海</div>
          <p>2019-07-25</p>
        </div>
        <span size="mini">选择</span>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .aside {
    .top {
      border: 1px solid #ddd;
      margin-bottom: 10px;
      .sever {
        text-align: center;
        padding: 10px 0;
        i {
          display: block;
          font-size: 40px;
        }
        span {
          display: block;
          font-size: 12px;
        }
      }
      p {
        font-size: 14px;
        padding: 10px;
        background-color: #f6f6f6;
      }
    }
    .bottom {
      padding: 10px;
      border: 1px solid #ddd;
      h4 {
        font-weight: normal;
        padding-bottom: 10px;
        border-bottom: 1px solid #eee;
      }
      .air-info {
        padding: 10px 0;
        .to-form {
          font-size: 14px;
        }
        p {
          font-size: 12px;
          margin-top: 5px;
        }
      }
      span {
        display: block;
        width: 44px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        font-size: 12px;
        color: #fff;
        background-color: orange;
        border-radius: 3px;
        margin-top: 20px;
        cursor: pointer;
      }
    }
  }
</style>

