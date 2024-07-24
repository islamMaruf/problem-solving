let arr = [2, 3, 4, 5, 2, 3, 4, 5];
let factorial_memo = [];

function factorialNumber(num) {
    if (factorial_memo[num]) {
        return factorial_memo[num]
    }
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result = result * i;
    }
    factorial_memo[num] = result;
    return result;
}

function factorialInArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(factorialNumber(arr[i]))
    }
}

factorialInArray(arr)