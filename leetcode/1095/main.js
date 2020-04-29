var findInMountainArray = function(target, mountainArr) {
    let left = 0
    let right = mountainArr.length() - 1
    let mid = left + ((right - left) >> 1)
    while(left <= right){
      if(mountainArr.get(mid) < mountainArr.get(mid + 1)){ 
        left = mid + 1
      } else {                                
        right = mid - 1
      }
      mid = left + ((right - left) >> 1)
    }
    let res = -1
    res = binarySearch(mountainArr, 0, left, target, true)
    res === -1 && (res = binarySearch(mountainArr, left, mountainArr.length() - 1, target, false))
    return res
  };
  function binarySearch(mountainArr, left, right, target, isUp){
    let mid = left + ((right - left) >> 1)　
    while(left <= right){
      let midValue = mountainArr.get(mid)
      if(midValue === target) return mid    
      if(midValue < target){
        isUp ? left = mid + 1 : right = mid - 1 
      } else {
        isUp ? right = mid - 1 : left = mid + 1
      }
      mid = left + ((right - left) >> 1)
    }
    return -1
  }