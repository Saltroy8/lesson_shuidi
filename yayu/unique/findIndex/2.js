// 启动严格模式
'use strict';

function findIndex(array,predicate,context) {
    for(var i= 0;i<array.length;i++){
        if(predicate.call(context,array[i],i)){
            return i;
        }
    }
    return -1;
}
//函数作为参数 JS里函数是一等对象
console.log(findIndex([1,2,3,4],function(item,i) {
    console.log(this);
    if (item == 3) return true;
},[1,2,3,4]));