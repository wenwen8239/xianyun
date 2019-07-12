<template>
  <div class="footer">
    <div class="main">
      <el-row>
        <el-col :span="6">
          <dl>
            <dt>闲云旅游旅游网</dt>
            <dd>上亿旅行者共同打造的"旅行神器"</dd>
            <dd><span>60,000</span> 多个全球旅游目的地</dd>
            <dd><span>600,000</span> 个细分目的地新玩法</dd>
            <dd><span>760,000,000</span> 次攻略下载</dd>
            <dd><span>38,000</span> 家旅游产品供应商</dd>
          </dl>
        </el-col>
        <el-col :span="5">
          <dl>
            <dt>关于我们</dt>
            <dd>隐私政策 商标声明</dd>
            <dd>服务协议 游记协议</dd>
            <dd>商城平台服务协议</dd>
            <dd>网络信息侵权通知指引</dd>
            <dd>闲云旅游旅游网服务监督员</dd>
            <dd>网站地图加入闲云旅游</dd>
          </dl>
        </el-col>
        <el-col :span="5">
          <dl>
            <dt>旅行服务</dt>
            <dd>旅游攻略 酒店预订</dd>
            <dd>旅游特价 国际租车</dd>
            <dd>旅游问答 旅游保险</dd>
            <dd>旅游指南 订火车票</dd>
            <dd>旅游资讯 APP下载</dd>
          </dl>
        </el-col>
        <el-col :span="6" class="scan">
          <img src="http://157.122.54.189:9093/images/1556522965.png" alt="">
          <p>关注我们</p>
        </el-col>
      </el-row>
      <div class="copy">
        <p>京ICP备08001421号 京公网安备110108007702 Copyright © 2016-2019 博学谷 All Rights Reserved</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .footer {
    color: #ccc;
    background-color: #333;
    .main {
      width: 1000px;
      margin: 0 auto;
      padding-top: 30px;
      dt {
        margin-bottom: 10px;
      }
      dd {
        font-size: 12px;
        line-height: 1.8;
        span {
          color: orange;
        }
      }
      .scan {
        font-size: 12px;
        text-align: center;
        img {
          width: 140px;
          height: 140px;
        }
      }
      .copy {
        padding: 50px 0;
        margin-top: 20px;
        border-top: 1px solid #666;
        text-align: center;
        font-size: 12px;
      }
    }
  }

</style>


