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
 * @param {number} targetSum
 * @return {number}
 */
 var pathSum = function(root, targetSum) {

    const map = {0:1}
    let totalPath = 0
    findPathSum(root, 0)
    return totalPath
    function findPathSum(node, sum){
        if(!node) return null
        let cumulativeSum = node.val + sum
        if(map[cumulativeSum - targetSum]){
            totalPath += map[cumulativeSum - targetSum]
        }
        map[cumulativeSum] = ++map[cumulativeSum] || 1
        findPathSum(node.left, cumulativeSum)
        findPathSum(node.right, cumulativeSum)
        map[cumulativeSum] = --map[cumulativeSum]

        
    }
};