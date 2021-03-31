import PalindromeWord from './PalindromeWord.js'

/**
 * Stacks
 * functions: push, pop, peek, lenght
 */

const word = 'ana'
const isPalindrome = new PalindromeWord(word).build()
console.log(isPalindrome ? `${word} is a palindrome` : `${word} is not a palindrome`)