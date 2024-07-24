let arr = [5, 4, 9, 2, 1, 0, 12, 7];
/**
 * reverse array position using brute force with two array
 */

function reversePositionUsingBruteForce(arr) {
    let size = arr.length - 1;
    let arr2 = [];
    for (let i = size; i >= 0; i--) {
        arr2[size - 1] = arr[i];
    }
    return arr2;
}
console.log('answer', reversePositionUsingBruteForce(arr))