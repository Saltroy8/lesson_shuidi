/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
    let left = 0, right = 0;
    let len = nums.length;
    for(let i = 0;i<len;i++){
        right += nums[i];
        if(left<nums[i]){
            left = nums[i]
        }
    }
    function check(mid,m) {
        let sum = 0;
        let cnt = 1;
        for(let i =0;i<len;i++){
            if(sum+nums[i]>mid){
                cnt++;
                sum = nums[i]
            } else {
                sum += nums[i]
            }
        }
        return cnt <= m;
    }
    while(left < right){
        let mid = Math.floor((left+right)/2)
        if(check(mid,m)){
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left
};
