
var isSubtree = function(s, t) {
    if(!s&&t){
        return false;
    }
     let linkNode = function(node,target){
         if(!node&&target)return false;
         if(node&&!target)return false;
         if(!node&&!target) return true
         if(node.val===target.val){
             return linkNode(node.left,target.left)&&linkNode(node.right,target.right)
         }else{
             return false
         }
     }
   return linkNode(s,t)||isSubtree(s.left,t)||isSubtree(s.right,t)
};