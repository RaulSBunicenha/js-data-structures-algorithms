export default class PalindromeWord {
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
        do {
            this.#reverseWord += this.#letters.pop()
        } while (this.#letters.length > 0)
    }

    check () {
        return this.#reverseWord == this.#word
    }

    build () {
        if(!this.isValid()) return false
        return this.check()
    }
}