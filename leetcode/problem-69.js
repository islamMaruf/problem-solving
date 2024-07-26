/**
 * 69. Sqrt(x)
Easy
Topics
Companies
Hint
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.


Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 */

var mySqrt = function (target) {

    if (target < 2) {
        return target;
    }
    let start = 0;
    let end = target;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let square = mid * mid;

        if (square == target) {
            return mid;
        }
        if (square < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return end;

};

console.log(mySqrt(8))