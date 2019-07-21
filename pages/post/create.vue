<template>
  <div class="container">
    <el-row type="flex" justify="space-between">
      <el-col class="main">
        <h2>发表新攻略</h2>
        <div class="create-desc">分享你的个人游记，让更多人看到哦！</div>
        <el-input v-model="title" placeholder="请输入标题"></el-input>
        <!-- 富文本插件 -->
        <VueEditor :config="config" ref="vueEditor"/>
      </el-col>
      <!-- <div class="aside">

      </div> -->
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
      title: '',
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
  }
}
</script>

<style lang="less" scoped>
  .container {
    width: 1000px;
    margin: 30px auto 20px;
  }
</style>


