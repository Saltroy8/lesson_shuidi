/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let len = nums.length
    let odd = []                  
    for(let i = 0; i < len; i++){   
      if(nums[i] % 2 === 1){
        odd.push(i)
      }
    }
    if(odd.length < k) return 0              
    let total = 0                               // 接下来就是找出k位奇数两边有多少个偶数了, 计总数
    for(let i = 0; i <= odd.length - k; i++){   // 循环奇数索引数组, 找出左右两边偶数
      let left = 0, right = 0                                   // 用来统计左右两边偶数
      let left_index = odd[i], right_index = odd[i + k - 1]     // 开始位置
      while(left_index > 0 && nums[left_index - 1] % 2 === 0){  // 往左找到不是偶数的为止
        left_index--
        left++
      }
      while(right_index < len && nums[right_index + 1] % 2 === 0){ // 往右找到不是偶数的为止
        right++
        right_index++
      }
      total += (left + 1) * (right + 1)
    }
    return total
  };