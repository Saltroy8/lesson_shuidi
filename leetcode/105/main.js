/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    var i = 0, tree = new TreeNode, treemap = {}, premap = {},inMap = {}, l = inorder.length;
    while (i < l) {
        premap[preorder[i]] = i;
        inMap[inorder[i]] = i;
        i++;
    }
    if(l ==0) return null;
    function getTop (i0,i1,j0,j1) {
        if(i0<0 || i1<0||j0>=l||j1>=l || i0>j0||  i1>j1) {
            return null;
        }
        var val = preorder[i0];
        var tree = new TreeNode(val);
        var left0 = i0+1, left1 = inMap[val] - 1;
            var l1 = j1 - inMap[val];
            tree.left = getTop(i0+1, i1,i0+1 + left1 - i1, left1);
            tree.right = getTop(j0 - l1 + 1, inMap[val] + 1, j0, j1);
        return tree;
    }
    return getTop(0,0,l -1, l-1);
};