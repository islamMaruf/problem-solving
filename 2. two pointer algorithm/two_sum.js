
function twoSumBruteForce(arr, target) {
    let size = arr.length - 1;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j <= i; j++) {
            if (arr[i] == target) {
                return [arr[i]];
            } else if (arr[i] + arr[j] == target) {
                return [arr[j], arr[i]];
            }
        }
    }
    return [];

}

// console.log('answer', twoSumBruteForce(arr, target))

let arr = [2,3,4]; target = 6;

function twoSumWithTwoPointer(arr, target) {
    let size = arr.length - 1;
    let i = 0;
    let j = size;
    while (i <= j) {
        let sum = arr[i] + arr[j]
        console.log(i,j,sum,target,arr[i],arr[j])
        if (sum == target) {
            return [i + 1, j + 1];
        } else if (sum > target) {
            j--;
        } else {
            i++;
        }
    }
    return [];
}

console.log('answer1', twoSumWithTwoPointer(arr, target))



// [2,7,11,13]; target is 9

// let i = 2 and j = 13
// i + j = 15
// now 15 > 9 so j position decrease
// now i = 2 and j = 11
// i + j = 12
// now 12 > 9 so j position decrease
// now i = 2 and j = 7
// i + j = 9 == target


// [2,7,11,13]; target is 18

// let i = 2 and j = 13
// i + j = 15
// now 15 < 18 so i position increase
// now i = 7 and j = 13
// i + j = 20
// now 20 > 18 so j position decrease
// now i = 7 and j = 11
// i + j = 18 == target
