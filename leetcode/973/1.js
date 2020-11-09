var kClosest = function(points, K, p = new PriorityQueue()) {
    for (var i = 0, v; i < points.length; i++) {
        v = points[i][0] * points[i][0] + points[i][1] * points[i][1] 
        if (i < K) {
            p.add(v, i) // 0 到 K - 1 项，放入 优先队列
        } else if (v < p.first()) {// < 优先队列第一项
            p.shift() // 优先队列中距离最大的节点弹出
            p.add(v, i) // 放入当前节点，上浮
        }
    }
    return p.q.map(v => points[v.second]) // 将优先队列 还原为 位置
};
class PriorityQueue {
    constructor(a) {
        this.q = []
        a && this._build(a)
    }
    add(v, second) { // 添加
        this.q.push({v, second}) // 添加 值（比较用） 和 第二参数（索引）
        this._up(this.q.length - 1) // 放入 二叉树的尾部，然后 上浮
    }
    shift() { // 弹出
        this.q.shift() // 弹出 根节点
        if (this.q.length) { // 如果还有节点
            this.q.unshift(this.q.pop()) // 将 最尾部的节点 放到根节点位置
            this._down(0) // 下沉 根节点
        }
    }
    first() { // 根节点的值
        return this.q[0].v 
    }
    _build(a) { // 初始化
        this.q.push({v:a[0]}) // 先给空队列放入第0个元素
        for (var i = 1; i < a.length; i++) this.q.unshift({v:a[i]}), this._down(0)
        // 从第1个元素起，把新元素放在根节点，然后下沉 根节点
    }
    _swap(l, r, t) { // 交换
        t = this.q[l], this.q[l] = this.q[r], this.q[r] = t // 交换两个节点
    }
    _down(i){ // 下沉
        var t = this.q.length - 2 >> 1, max, maxI // 叶子节点的根节点索引，下沉到 叶子节点的根节点停止
        while(i <= t){
            var l = i * 2 + 1, r = l + 1 // 左子节点的索引 = 当前节点索引 * 2 + 1，右子节点的索引 = 左子节点的索引 + 1
            if ((this.q[l] ? this.q[l].v : -Infinity) > (this.q[r] ? this.q[r].v : -Infinity))
                 max = this.q[l].v, maxI = l
            else max = this.q[r].v, maxI = r // 找到 左子节点 和 右子节点的 较大者
            if (this.q[i].v < max) this._swap(i, maxI), i = maxI // 当前节点的 左子节点 或 右子节点 比 它大，交换 
            else break
        }
    }
    _up(i) { // 上浮
        while(i > 0){ // 不能超过根节点
            var t = i - 1 >> 1 // 当前节点的 根节点索引 = 当前节点索引 - 1 的一半
            if (this.q[i].v > this.q[t].v) this._swap(i, t), i = t // 当前节点值 比 它的根节点 大，交换
            else break
        }
    }
}
