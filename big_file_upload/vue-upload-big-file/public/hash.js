self.importScripts('/spark-md5.min.js')

self.onmessage = e => {
    // self.postMessage({
    //     "msg":"你好"
        
    // })
    const {fileChunkList} = e.data;
    const loadNext = index => {
        count++;
        if(count === fileChunkList.length){
            self.postMessage({

            })
        }
        localNext(count);
    }
    loadNext(0)
} //this 当前的线程