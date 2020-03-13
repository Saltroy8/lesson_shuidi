var majorityElement = function(nums) {
    let min;
    for(let i = 0; i<nums.length; i++){
        min = i;
        for(let j = i; j < nums.length; j++){
            if(nums[j] < nums[min]){
                min = j;
            }
        }
        if(min != i) {
            let temp = nums[i];
            nums[i] = nums[min];
            nums[min] = temp;
        }
    }
    return nums[Math.floor(nums.length / 2)];
}
console.log(majorityElement([1,1,2]));