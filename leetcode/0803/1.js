/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function(nums) {
    // 创建队列 
    var queue = []
    for(let i = 0; i < nums.length; i++) {
        var item = nums[i]
        if(i === nums[i]) {
            queue.push(i)
        }
    }
    if(!queue.length) return -1;    // 如果没有则返回-1
    return queue.shift()    // 返回队列头部
};

