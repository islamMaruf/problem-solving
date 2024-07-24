

let arr = [2, 5, 8, 8, 8, 8, 8, 9, 12, 12];
let target = 8;

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
        return [];
    }
    let position = [];
    for (let i = targetIndex - 1; i >= 0; i--) {
        if (arr[i] != arr[targetIndex]) {
            break;
        }
        position.push(i)
    }
    for (let j = targetIndex; j < arr.length; j++) {
        if (arr[j] != arr[targetIndex]) {
            break
        }
        position.push(j)
    }
    return position;
}
let targetIndex = binarySearch(arr, target)
let occCount = occurrenceCount(arr, targetIndex)
console.log(targetIndex, occCount);
// console.log(binarySearch(arr2, target))