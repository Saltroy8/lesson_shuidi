# 2020春招名企就业前端工程师考点解析

分析下作者为什么要出这个题
文件上传是开发中的难点，大文件上传及断点续传 难点中的细节及核心技术点。面试官在考察es6文件对象、ajax 上传， async await promise 、后台文件存储、流操作等全面的全栈技能的同时，提升难度到大文件和断点续传，通过个主题，就可以较好的考察面试者全面解决问题的能力和技术细节。移动时代图片成为社交的主流，短视屏时代铁定是大文件，所以在上岗后，这个题的知识点是必须掌握清楚点，所以这是一道非常实在的好题

文件 发送请求 上传 8 size 1M 8份 
切片 
1. js 在es6 文件对象file node file stream 有所增强。
任何文件都是二进制，分割blob 
start，size，offset
http请求可并发 n个切片并发上传 速度更快，改善了体验。 

- 前端的切片，让http并发带来上传大文件的快感 
  1. file.slice 完成切片，blob 类型文件切片，js 二进制文件类型的 blob协议 在上传文件上传到服务器之前就可以提前预览。

- 服务器端
  如何将这些切片，合交成一个，并且能显示原来的图片
  stream 流
  可读流，可写流
  chunk 都是一个二进制流文件，
  Promise.all 来包装每个chunk 的写入
  start end fse.createWriteStream
  每个chunk写入 先创建可读流，再pipe给可写流的过程
  思路:以原文件作为文件夹的名字，在上传blobs到这个文件夹，前且每个blob都以文件-index的命名方式来存储

  - http并发上传大文件


  - vue 实现上传文件的细节
    无论是前端还是后端，传输文件，特别是大文件，有可能发生丢失文件的情况，网速，服务器超时，如何避免丢失
    通过hash串，文件名 并不是唯一的，不同名的图片内容是一样的，针对文件内容进行hash计算 前端算一个，单向
    后端拿到内容算hash
    如果前端hash和后端hash一样
    如果不一样就说明丢失 重传

    - html5特性你怎么理解，localStorage...
    Web Workers 优化我们的前端性能，将要花大量时间的，复杂的，放到一个新的线程中去计算，文件上传通过hash计算，文件没有问题
    - es6 哪些特性，你怎么用的
      函数的参数赋默认值
    - 给用户感知用户体验是核心
    

    
