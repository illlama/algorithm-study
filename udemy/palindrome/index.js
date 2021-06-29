// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//     const arr = str.split('')
//     let stack = []
//     if(arr.length % 2 === 1) arr.splice((arr.length -1)/2 , 1)
//     for (char of arr ){
//         if(stack[stack.length-1] === char){
//             stack.pop()
//         }else{
//             stack.push(char)
//         }
//     }
//     return stack.length ? false : true
// }

function palindrome(str) {
    return str === str.split('').reverse().join('')
}

// function palindrome(str) {
//     return str.split('').every((char, i) => {
//         return char === str[str.length - i - 1]
//     })
// }


module.exports = palindrome;
