var insertIntoBST = function(root, val) {
    if(!root) return new TreeNode(val);
    if(root.val>=val){//比该节点大查找左节点
        root.left = insertIntoBST(root.left,val)
    }else{//比该节点小查找右节点
        root.right = insertIntoBST(root.right,val)
    }
    return root;
};
