const http = require('http');
// 将我们的服务器充分利用起来
// 当前的服务器性能利用起来 CPU多核
const numCPUS = require('os').cpus().length;
const cluster = require('cluster');

if(cluster.isMaster){
    for(let i = 0; i < numCPUS; i++) {
        cluster.fork();
    }
} else {
    //web 天生是多线程的
}