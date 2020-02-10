<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div>
      <input type="file" @change="handleFileChange"/>
      <el-button @click="handleUpload">上传</el-button>
    </div>
  </div>
</template>

<script>
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
    status:Status.wait
  }),
  methods:{
    async handleUpload(e) {
      // 大量的任务
      if(!this.container.file) return;
      this.status = Status.uploading;
      const fileChunkList = this.createFileChunk(this.container.file);
      console.log(fileChunkList); 
    },

    createFileChunk(file,size = SIZE){
      const fileChunkList = [];
      let cur = 0;
      while(cur < file.size) {
        fileChunkList.push({
          file:file.slice(cur,cur + size)
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
