/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
// 普通中序遍历
var recoverTree = function (root) {
    const stack = []
    let node = root
    let pre = null, x = null, y = null
    while (node || stack.length) {
        if (node) {
            stack.push(node)
            node = node.left
        } else {
            const cur = stack.pop()
            // 如果当前节点的值小于上个节点的值，则不满足二叉搜索树
            if (pre && cur.val < pre.val) {
                // x存需要交换的中较大的那一个，y存较小的那一个
                y = cur
                if (!x) {
                    x = pre
                }
            }
            // 用pre存上一个遍历到的节点
            pre = cur
            node = cur.right
        }
    }
    // 交换x和y的值
    [x.val, y.val] = [y.val, x.val]
};

// 看了官方题解后学到的空间复杂度O(1)的中序遍历

// Morris 中序遍历
var recoverTree = function (root) {
    let node = root
    let pre = null, predecessor = null, x = null, y = null
    while (node) {
        // 如果node存在左节点
        if (node.left) {
            // predecessor节点就是当前 node 节点向左走一步，然后一直向右走至无法走为止
            predecessor = node.left
            while (predecessor.right && predecessor.right !== node) {
                predecessor = predecessor.right
            }
            // 如果predecessor存在右节点，说明左子树已经遍历完了
            if (predecessor.right) {
                // 这一块与普通遍历一样 
                if (pre && pre.val > node.val) {
                    y = node
                    if (!x) {
                        x = pre
                    }
                }
                pre = node

                // 将右节点设为null，恢复树的形状
                predecessor.right = null
                // node的右节点如果存在的话，其实是存的之前的node，相当于普通方法里从栈里pop()出来的节点
                node = node.right
            } 
            // 如果predecessor不存在右节点，将其右节点设为node，node设为node的左节点
            else {
                // 将node存在predecessor的右节点里，相当于普通方法里将节点存到栈里
                predecessor.right = node
                node = node.left
            }
        }
        // 如果node不存在左节点，则node为正在遍历的节点。
        else {
            // 这一块与普通遍历一样
            if (pre && pre.val > node.val) {
                y = node
                if (!x) {
                    x = pre
                }
            }
            pre = node

            node = node.right
        }
    }
    // 交换x和y的值
    [x.val, y.val] = [y.val, x.val]
};
