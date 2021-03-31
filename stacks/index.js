/**
 * Stacks
 * functions: push, pop, peek, lenght
 */

class PalindromeWord {
    #letters = [] // my stack
    #word = null
    #reverseWord = ''

    constructor (word) {
        this.#word = word
        
        if(!this.isValid()) return false
        this.setLetters()
        this.setReverseWord()
    }

    isValid () {
        if (this.#word) return true

        return false
    }

    setLetters () {
        for (let i = 0; i < this.#word.length; i++) this.#letters.push(this.#word[i])
    }

    setReverseWord () {
        for (let i = 0; i < this.#word.length; i++) this.#reverseWord += this.#letters.pop()
    }

    build () {
        if(!this.isValid()) return false
        return this.#reverseWord == this.#word
    }
}

const isPalindrome = new PalindromeWord('ana').build()

console.log(isPalindrome)