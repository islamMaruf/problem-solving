/**
 * 125. Valid Palindrome
Easy
Topics
Companies
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
 */



var isAlphaNumeric = function (position) {
    let charCode = char.charCodeAt(position);
    if (!(charCode > 47 && charCode < 58) &&
        !(charCode > 96 && charCode < 123) &&
        !(charCode > 64 && charCode < 91)
    ) {
        return false;
    }
    return true;
}

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    let subject = s.toLowerCase().split();
    let start = 0;
    let end = subject.length - 1
    while (start < end) {
        while(!isAlphaNumeric(start)){
            start++;
        }
        while(!isAlphaNumeric(end)){
            end--;
        }
        if (subject[start] != subject[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
};

console.log(validPalindrome("aba"))