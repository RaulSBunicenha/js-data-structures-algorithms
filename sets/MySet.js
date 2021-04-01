export default class MySet {
    #collection = []

    has (element) {
        return this.#collection.indexOf(element) !== -1
    }

    #addOne (element) {
        if (!this.has(element)) {
            this.#collection.push(element)
            return true
        }

        return false
    }

    #removeOne (element) {
        if (this.has(element)) {
            const index = this.#collection.indexOf(element)
            this.#collection.splice(index, 1)
            return true
        }

        return false
    }

    get values () {
        return this.#collection
    }

    add (...elements) {
        elements.forEach(element => this.#addOne(element))
    }

    remove (...elements) {
        elements.forEach(element => this.#removeOne(element))
    }

    get size () {
        return this.#collection.length
    }

    union (otherSet) {
        const unionSet = new MySet()
        unionSet.add(...this.values)
        unionSet.add(...otherSet.values)
        return unionSet
    }

    intersection (otherSet) {
        const intersectionSet = new MySet()
        this.values.forEach(element => {
            if (otherSet.has(element)) intersectionSet.add(element)
        })
        return intersectionSet
    }

    difference (otherSet) {
        const differenceSet = new MySet()
        this.values.forEach(element => {
            if (!otherSet.has(element)) differenceSet.add(element)
        })
        return differenceSet
    }

    subset (otherSet) {
        return this.values.every(element => otherSet.has(element))
    }
}