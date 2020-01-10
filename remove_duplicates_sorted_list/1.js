var removeDuplicates = function(nums) {
    const size = nums.length;
    let slowp = 0;
    for (let fastp = 0; fastp < size; fastp++ ) {
        // console.log(nums[fastp]);
        if (nums[fastp] !== nums[slowp]) {
            slowp++; //不一样
            nums[slowp] = nums[fastp];
             
        }
    }
    return slowp + 1;
}
console.log(removeDuplicates([1,1,2]))