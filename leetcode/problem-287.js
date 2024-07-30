/**
 * 283. Move Zeroes
Easy
Topics
Companies
Hint
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.



Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]


Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let left = 0;
    let right = 0
    while (right < nums.length) {
        if (nums[right] !== 0) {
            let temp = nums[right]
            nums[right] = nums[left]
            nums[left] = temp
            left++
        }
        right++;
    }


    return nums;
};

console.log(moveZeroes([1, 2, 3, 4, 5, 0, 6]));
//0,1,0,3,12
// left = 1
//1,0,0,3,12

/**
 * a= 10;
 * b = 20;
 * temp = a
 * a = b
 * b = temp
 */

// Pseudocode:
// [1]- Initialize a pointer 'left' to 0, and 'right' to the next element 1.
// [2]- Iterate through the list using a 'right' pointer starting at 1 and moving to the right.
// [3]- If the element at the 'left' pointer is non-zero, update 'left' to 'right' and continue to the next iteration.
// [4]- If the element at the 'right' pointer is 0, continue to the next iteration without making any changes.
// [5]- If the element at the 'right' pointer is non-zero, swap the elements at 'left' and 'right' to move the non-zero element to the 'left' position, then increment 'left'.
// [6]- Continue this process for all elements in the list.
// [7]- The function does not return anything but modifies the input list 'nums' in-place.

// If someone doesn't understand. comment here, and I will give you an example applying the pseudocode.
// Good luck .