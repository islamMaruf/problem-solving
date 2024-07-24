

let arr1 = [2, 5, 8, 8, 8, 8, 8, 9, 12, 12];
let target = 5;

function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let asc = false;
    let mid;
    if (arr[start] < arr[end]) {
        asc = true;
    }

    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid] == target) {
            return mid;
        }
        if (asc) {
            if (arr[mid] > target) {
                end = mid - 1;
            } else if (arr[mid] < target) {
                start = mid + 1;
            }
        } else {
            if (arr[mid] > target) {
                start = mid + 1;
            } else if (arr[mid] < target) {
                end = mid - 1;
            }
        }
    };
    return -1
}
function occurrenceCount(arr, targetIndex) {
    if(targetIndex == -1){
        return 0;
    }
    let count = 0;
    for (let i = targetIndex - 1; i >= 0; i--) {
        if (arr[i] != arr[targetIndex]) {
            break;
        }
        count++;
    }
    for (let j = targetIndex; j < arr.length; j++) {
        if (arr[j] != arr[targetIndex]) {
            break
        }
        count++;
    }
    return count;
}
let targetIndex = binarySearch(arr1, target)
let occCount = occurrenceCount(arr1, targetIndex)
console.log(targetIndex, occCount);
// console.log(binarySearch(arr2, target))