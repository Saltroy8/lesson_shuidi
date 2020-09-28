/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    var r = root && [root] || [], l
    while(l = r.length) {
        while(l-- > 0) {
            var n = r.shift()
            n.next = l ? r[0] : null
            n.left && r.push(n.left)
            n.right && r.push(n.right)
        }
    }
    return root
};
