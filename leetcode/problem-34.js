/**
 * 34. Find First and Last Position of Element in Sorted Array
Medium
Topics
Companies
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109
 */


function binarySearch(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let mid;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        console.log({ mid, start, end, mv: nums[mid], sv: nums[start], ev: nums[end], target })
        if (nums[mid] == target) {
            return 1;
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function searchRange(nums, target) {
    let targetIndex = binarySearch(nums, target);
    if (targetIndex == -1) {
        return [-1, -1]
    }

    let i = 0;
    let j = nums.length - 1

    while (i <= j) {
        if (nums[i] != target) {
            i++;
        }
        if (nums[j] != target) {
            j--;
        }
        if (nums[i] == nums[j]) {
            return [i, j];
        }
    }

    return [-1, -1];
};

console.log(searchRange([0, 0, 1, 2, 2], 2))
