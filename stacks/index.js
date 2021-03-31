import PalindromeWord from './PalindromeWord.js'

/**
 * Stacks
 * functions: push, pop, peek, lenght
 */

const word = 'ana'
const isPalindrome = new PalindromeWord(word).build()
console.log(isPalindrome ? `${word} is a palindrome` : `${word} is not a palindrome`)

/**
 * Change the array standard behaviour and add peek function
 */
{
    Array.prototype.peek = function () {
        if (this.length == 0) return null
        return this[this.length - 1]
    }
    
    let stack = []
    stack.push('first Item')
    stack.push('second Item')
    console.log('my full stack is', stack)
    console.log(`The last item is:`, stack.peek())
    console.log(`Lets pop it:`, stack.pop())
    console.log(`Now the last item is:`, stack.peek())
}