/**
 * reverse array position using nested loop
 */
let arr = [5, 4, 9, 2, 1, 0, 12, 7];
function reversePositionUsingNestedLoop(arr) {
    let j = arr.length - 1;
    while (j > 0) {
        for (let i = 0; i < j; i++) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
        j--;
    }
    return arr;
}

console.log('answer', reversePositionUsingNestedLoop(arr))