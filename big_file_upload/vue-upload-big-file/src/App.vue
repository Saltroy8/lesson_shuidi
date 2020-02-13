<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div>
      <input type="file" @change="handleFileChange"/>
      <el-button @click="handleUpload">上传</el-button>
    </div>
    <div>
      <div>计算文件hash</div>
      <el-progress :percentage="hashPercentage"></el-progress>
    </div>
  </div>
</template>

<script>
// import { resolve } from 'dns';
// import HelloWorld from './components/HelloWorld.vue'
const Status = {
  wait:"wait",
  pause:"pause",
  uploading: "uploading"
}
const SIZE = 0.5*1024*1024;

export default {
  name: 'App',
  data: () =>({
    container:{ //将任务放到一起
      file:null,
      hash:"",
    },
    status:Status.wait,
    hashPercentage:0
  }),
  methods:{
    request({
    url,
    method = 'POST',
    data,
    headers = {},
    requestList //上传的文件列表
  }) {
    return new Promise(resolve => {
      const xhr = new XMLHttpRequest(); //js ajax 对象
      xhr.open(method, url); //请求
      Object.keys(headers).forEach(key =>
        xhr.setRequestHeader(key, headers[key]) //请求加头
      );

      xhr.send(data);
      xhr.onload = e => {
        resolve({
          data:e.target.response
        });
      }
    });
  },
    request({
    url,
    method = 'POST',
    data,
    headers = {},
    requestList //上传的文件列表
  }) {
    return new Promise(resolve => {
      const xhr = new XMLHttpRequest(); //js ajax 对象
      xhr.open(method, url); //请求
      Object.keys(headers).forEach(key =>
        xhr.setRequestHeader(key, headers[key]) //请求加头
      );

      xhr.send(data);
      xhr.onload = e => {
        resolve({
          data:e.target.response
        });
      }
    });
  },
    async calculateHash (fileChunkList) {
      return new Promise(resolve => {
        // 封装花时间的任务
        // web workers   
        // js 单线程的 UI 主线程 
        // html5 web workers 单独开一个线程 独立于 worker
        // 回调 不会影响原来的UI 
        // html5 带来的优化， 
        this.container.worker = new Worker("/hash.js");
        this.container.worker.postMessage({ fileChunkList });
        this.container.worker.onmessage = e => {
          console.log(e.data);
          const { percentage, hash} = e.data;
          console.log(percentage, '----');
          this.hashPercentage = percentage;
          if (hash) {
            resolve(hash);
          }
          
        }
      })
    },
    async handleUpload(e) {
      // 大量的任务
      if(!this.container.file) return;
      this.status = Status.uploading;
      const fileChunkList = this.createFileChunk(this.container.file);
      console.log(fileChunkList); 
      this.container.hash = await this.calculateHash(fileChunkList);
      
      const {shouldUpload,uploadedlist} = await
      this.verifyUpload(
        this.container.file.name,
        this.container.hash
      );
    },
    async verifyUpload(filename,fileHash) {
      const { data } = await this.request({
        url: 'http://localhost:3000/verify',
        headers: {
          "content-type":"application/json"
        },
        data:JSON.stringify({
          filename,
          fileHash
        })
      })
    },

    createFileChunk (file, size = SIZE) {
      const fileChunkList = [];
      let cur = 0;
      while(cur < file.size) {
        fileChunkList.push({
          file: file.slice(cur, cur + size)
        })
        cur += size;
      }
      return fileChunkList;
    },
    handleFileChange(e) {
      const [file] = e.target.files;
      // console.log(e.target.files);
      this.container.file = file;
    }
  },
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
