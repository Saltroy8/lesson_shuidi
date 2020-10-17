/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    let count = 0
    /**
     * dfs函数
     * @param {number} x x坐标 0~n-1
     * @param {number} y y坐标 0~n-1
     * @param {number[][]} arr 存已放置皇后坐标的数组
     */
    const dfs = (x, y, arr) => {
        // 遍历已放置皇后的坐标
        for (let [x0, y0] of arr) {
            // 如果在一条直线或者一条斜线上，直接return
            if (y === y0 || Math.abs(x - x0) === Math.abs(y - y0)) {
                return
            }
        }
        // 如果x坐标等于n-1，则表示已经放置n个皇后，为一种解法
        if (x === n - 1) {
            count++
            return
        }
        // 对x坐标为x+1的那一行进行遍历，挨个进行dfs
        for (let i = 0; i < n; i++) {
            arr.push([x, y])
            dfs(x + 1, i, arr)
            arr.pop()
        }
    }
    // 对x坐标为0的那一行进行遍历，挨个进行dfs
    for (let i = 0; i < n; i++) {
        dfs(0, i, [])
    }
    return count
};
