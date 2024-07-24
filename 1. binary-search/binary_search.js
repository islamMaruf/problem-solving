

let arr = [2, 4, 8, 16, 32, 64, 128, 512, 1024, 2048];
let arr2 = [10, 9, 8, 7, 6, 5, 4];

let target = 6;

/**
 *1st phrase
 * target 2048
 * mid 32
 * target > 32
 * [64,128,512,1024,2048]
 * start = 5
 * end = 9
 * target > 512
 * start = 8
 * end = 9
 * [1024, 2048]
 * target > 1024
 * target 4 
 * mid 32 
 * 1 < 32
 * end 4, start 0
 * [2,4,8,16]
 * [2,4]
 * 0
 */



function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let mid;
    let asc = false;
    if (arr[start] < arr[end]) {
        asc = true;
    }
    console.log(asc)
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid] == target) {
            return 'data found on index - ' + mid
        }
        if (asc) {
            if (arr[mid] < target) {
                start = mid + 1;
            } else if (arr[mid] > target) {
                end = mid - 1;
            }
        }
        else {
            if (arr[mid] < target) {
                end = mid - 1;
            } else if (arr[mid] > target) {
                start = mid + 1;
            }
        }
    }
    return 'data not found';
}
/**
 * arr = [40,30,20,10,8,6,4,2,1];
 * target = 30
 * mid_value = 8
 * start = mid + 1;
 * celling and flooring problem in binary search
 */


console.log(binarySearch([6,5,4,3,2,1], 2))
/**
 * arr = [20,30,40,50,60];
 * let assume a target value 57
 * 57 is not is the array
 * its flooring value is 50 and celling value is 60
 * if sorted array then always binary search
 * flooring and celling is always in binary search
 * leet code problem - 2089, 540, 1539, 744, 367, 35, 852**
 * 
 * mountain array [5,1,2,3,4], [4,5,3,2,1], [3,4,5,1,2], [2,3,4,5,1]
 * 
 * 
 */
