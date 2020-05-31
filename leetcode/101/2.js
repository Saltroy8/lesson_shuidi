var isSymmetric = function(root) {
    if(!root) return true
    let stack = [root.left, root.right]
    while(stack.length) {
        let right = stack.pop()
        let left = stack.pop()
        if(left && right) {
            if(left.val !== right.val) return false
            stack.push(left.left)
            stack.push(right.right)
            stack.push(left.right)
            stack.push(right.left)
        } else if(left || right) {
            return false
        }
    }
    return true
};
