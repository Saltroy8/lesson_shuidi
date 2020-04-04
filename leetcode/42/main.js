/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let sum = 0
for(let index=1; index<height.length-1; index++){
    let leftMax = 0 
    for(let i=index-1; i>=0; i--){
        leftMax = height[i] >= leftMax ? height[i] : leftMax
    }
    let rightMax = 0
    for(let i=index+1; i<height.length; i++){
        rightMax = height[i] >= rightMax ? height[i] : rightMax
    }
    let min = Math.min(leftMax, rightMax)
    if(min > height[index]){
        sum = sum + min - height[index]
    }
}
return sum
};