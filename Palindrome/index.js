/*
Code challenge:

Given a string or number, check if it is a palindrome
*/

const isPalindrome = (word) => {
  if(typeof word === 'number'){
    word = word.toString();
  }
  const palindrome = word.split("").reverse().join("");
  if(word === palindrome){
    return true
  }
  return false
}

isPalindrome("tacocat") //true
isPalindrome("notpalindrome") //false