// webpack 怎么在js 文件里 处理css 文件
const css = require('css-loader!./index.css'); // {    }
// 并不是水火不相容的 css 属性节点 css 文本  js 文本
// dom node 节点 tree , 再使用 css { width:, h:, color...}
// {
//     width: 100%;
//     height: 100vh;
//     background-color: orange;
// }
// 图片 二进制
// css in js 

const a = 100;
//console.log(a)
console.log(a, css);