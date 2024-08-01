/**
 * 633. Sum of Square Numbers
Medium
Topics
Companies
Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.

 

Example 1:

Input: c = 5
Output: true
Explanation: 1 * 1 + 2 * 2 = 5
Example 2:

Input: c = 3
Output: false
 

Constraints:

0 <= c <= 231 - 1
 */

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (target) {
    let i = 0;
    let j = Math.floor(Math.sqrt(target));

    while (i <= j) {
        let sum = (i * i) + (j*j)
        if (sum == target) {
            return true;
        } else if (sum > target) {
            j--;
        } else{
            i++;
        }

    }
    return false;

};

console.log(judgeSquareSum(999))
