<template>
  <div class="container">
    <el-row type="flex" justify="space-between">
      <el-col class="main" :span="18">
        <h2>发表新攻略</h2>
        <div class="create-desc">分享你的个人游记，让更多人看到哦！</div>
        <el-form :model="form" ref="form">
          <el-form-item>
            <el-input v-model="form.title" placeholder="请输入标题" class="title"></el-input>
          </el-form-item>
          <!-- 富文本插件 -->
          <el-form-item>
            <VueEditor :config="config" ref="vueEditor" v-model="form.content"/>
          </el-form-item>
          <el-form-item label="选择城市" label-width="80px">
            <el-autocomplete
              v-model="form.city"
              :fetch-suggestions="queryCitySearch"
              placeholder="请输入内容"
              @select="handleCitySelect"
            ></el-autocomplete>
          </el-form-item>
        </el-form>
        <el-row type="flex" align="middle" class="create-button">
          <el-button type="primary" size="medium" style="margin-right: 20px;font-size: 12px;" @click="handleSubmit">发布</el-button>
          <div class="submit-side" style="font-size: 14px;">
            <span>或者</span>
            <nuxt-link to="#" style="color: orange;" @click="saveDraft">保存到草稿</nuxt-link>
          </div>
        </el-row>
      </el-col>
      <el-col class="aside" :span="5">
        <!-- 草稿箱 -->
        <div class="draft-box">
          <h4 class="draft-title">草稿箱（1）</h4>
          <div class="draft-list">
            <div class="draft-item">
              <div @click="editDraft"><i class="iconfont el-icon-edit"></i></div>
              <p>2019-07-20</p>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import "quill/dist/quill.snow.css"
let VueEditor;
if (process.browser) {
    VueEditor = require('vue-word-editor').default
}
export default {
  components: {
    VueEditor
  },
  data() {
    return {
      // 表单
      form: {
        title: '',
        content: '',
        city: ''
      },
      // 富文本配置
      config: {
        modules: {
          // 工具栏
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],
            ['image', 'video'],

            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
            [{ 'direction': 'rtl' }],                         // text direction
          ]
        },
        // 主题
        theme: 'snow',
        uploadImage: {
          url: "http://localhost:1337/upload",
          name: "files",
          uploadBefore(file){
            return true
          },
          uploadProgress(res){

          },
          uploadSuccess(res, insert){
            insert("http://localhost:1337" + res.data[0].url)
          },
          uploadError(){},
            showProgress: false
        },

        uploadVideo: {
          //url: "http://157.122.54.189:9095/upload",
          url: "http://localhost:1337/upload",
          name: "files",
          uploadBefore(file){
            return true
          },
          uploadProgress(res){

          },
          uploadSuccess(res, insert){
            insert("http://localhost:1337" + res.data[0].url)
          },
          uploadError(){},
        }
      }
    }
  },
  methods: {
    // 实现远程搜索城市列表数据
    queryCitySearch(value,callback) {

    },
    // 点击获取城市名称
    handleCitySelect() {

    },
    // 保存到草稿箱
    saveDraft() {

    },
    // 编辑草稿箱信息
    editDraft() {

    },
    // 发布新攻略
    handleSubmit() {

    }
  }
}
</script>

<style lang="less" scoped>
  .container {
    width: 1000px;
    margin: 30px auto 20px;
    .main {
      h2 {
        font-weight: normal;
      }
      .create-desc {
        color: #999;
        font-size: 12px;
        margin: 10px 0;
      }
      /deep/ .ql-container {
        height: 400px;
      }
    }
    .aside {
      .draft-box {
        color: #666;
        padding: 10px;
        border: 1px solid #ddd;
        h4 {
          font-weight: normal;
          margin-bottom: 10px;
        }
        .draft-item {
          margin-bottom: 10px;
          div {
            &:hover {
              color: orange;
              cursor: pointer;
            }
          }
          p {
            font-size: 14px;
            color: #999;
          }
        }
      }
    }
  }
</style>


