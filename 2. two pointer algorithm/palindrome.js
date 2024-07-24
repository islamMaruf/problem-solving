
/**
 * 
 * palindrome - [a,b,b,a]
 */



function checkPalindrome(arr) {
    let i = 0;
    let k = arr.length - 1;
    while (i <= k) {
        if (arr[i] != arr[k]) {
            return false
        }
        i++;
        k--;
    }
    return true;
}
console.log(checkPalindrome(['a', 'b', 'b', 'a']))