let arr = [5, 4, 9, 2, 1, 0, 12, 7];

/**
 *
 * swap algorithm
 * let a = 10;
 * let b = 20;
 * let temp;
 * swap them
 * temp = a;
 * a = b;
 * b = temp
 */

function reverseWithPointer(arr) {
    let size = arr.length - 1;

    for (let i = 0, j = size; i <= j; i++, j--) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp
    }
    return arr;
}

console.log(reverseWithPointer(arr))