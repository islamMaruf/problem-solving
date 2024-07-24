
let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 16];
function isPrime(num) {
    if (num == 1) {
        return true;
    }
    let count = 0;
    for (let i = 0; i < num; i++) {
        if (num % i == 0) {
            count++;
        }
    }
    return count == 2;
}

function checkIsPrimeInArray(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        console.log(isPrime(arr[i]))
    }
}
checkIsPrimeInArray([1, 2, 3, 4, 5, 6])


