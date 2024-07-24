let arr = [5, 4, 9, 2, 1, 0, 12, 7];

function sortingAscUsingBruteForce(arr) {
    let size = arr.length - 1
    for (let j = 0; j < size; j++) {
        for (let i = 0; i < (size - j); i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }
        }
    }
    return arr;

}
console.log(sortingAscUsingBruteForce(arr))

function sortingDescUsingBruteForce(arr) {
    let size = arr.length - 1
    for (let j = 0; j < size; j++) {
        for (let i = 0; i < (size - j); i++) {
            if (arr[i] < arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }
        }
    }
    return arr;

}
console.log(sortingDescUsingBruteForce(arr))
