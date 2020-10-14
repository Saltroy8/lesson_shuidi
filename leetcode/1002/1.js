var commonChars = function(A) {
    let arr = [] // 返回
    for (let i = 0; i < A[0].length; i++) { // 遍历A数组第一个原生
        let str = A[0].charAt(i) // 当前遍历的字母
        let num = 0  // 记录出现次数
        for (let j = 1; j < A.length; j++) { // 遍历A数组后面的元素
            let ind = A[j].indexOf(str) // 记录下标
            if (ind === -1) { // 没有当前字母
                continue
            } else {
                num++ // 有当前字母记录次数加1
                let arr = A[j].split('')
                arr.splice(ind, 1)
                A[j] = arr.join('') // 删除当前元素中的当前字母
            }
        }
        if (num === A.length - 1) { // 记录值与A数组长度相等，因为第一个元素没记录进去所以减一
            arr.push(str)  // push当前字母
        }
    }
    return arr
};
