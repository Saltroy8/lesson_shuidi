// fileSystem 内置模块
const fs = require('fs');
const AipImageClassifyClient = require("baidu-aip-sdk").imageClassify;

const image = fs.readFileSync("car.jpg").toString("base64");
const client = new AipImageClassifyClient('17711768','DMcQ7DIatMvXrnjhANyZtvd9','lQ5vqgsGS13pQIGwE24vEQ0NM7xiyFCQ');
client
  .carDetect(image)
  .then(function(result){
      console.log(result)
  })

// console.log('hello node');
// //回调函数
// // 文件在哪里？  磁盘里
// // js 在哪里运行  内存中 I/O操作
// fs.readFile('./texqt.txt',function(err,data){
//     if(err){
//         return console.error(err);
//     }
//     console.log(data.toString());
// })