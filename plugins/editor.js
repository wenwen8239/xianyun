import Vue from 'vue'
import "quill/dist/quill.snow.css"
let VueEditor;
if (process.browser) {
    VueEditor = require('vue-word-editor').default
}
