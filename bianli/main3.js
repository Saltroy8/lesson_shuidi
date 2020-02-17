// 二线公司面试就这样， 一线公司面试  提升一下， 不用递归
// 缺点 ? 
function TreeNode(val) { //形成一棵树的结点
    this.val = val;
    this.left = this.right = null; //左指针， 右指针
  }
  // 完全二叉树 满
  var a1 = new TreeNode(1); //root 根结点
  var a2 = new TreeNode(2);
  var a3 = new TreeNode(3);   //一棵小树
  a1.left = a2;
  a1.right = a3;
  // 2 它的子树？  形成是不是可以用递归的思想去形成?
  var a4 = new TreeNode(4);
  var a5 = new TreeNode(5);
  a2.left = a4;
  a2.right = a5;
  var a6 = new TreeNode(6);
  var a7 = new TreeNode(7);
  a3.left = a6;
  a3.right = a7;
  //左中右
var postorderTraversal = function(root) {
    var result = [];
    function pushRoot(cur){
        if(cur != null){
            if(cur.left != null){
                pushRoot(cur.left);
            }
            if(cur.right != null){
                pushRoot(cur.right);
            } 
            result.push(cur.val);
        }
    }
    pushRoot(root);
    return result;
};
  console.log(postorderTraversal(a1));