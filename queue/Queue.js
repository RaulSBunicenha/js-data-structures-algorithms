export default class Queue {
    _collection = []

    print () {
        console.log(this._collection)
    }

    enqueue (element) {
        this._collection.push(element)
    }

    dequeue () {
        return this._collection.shift()
    }

    get front () {
        return this._collection[0]
    }

    get size () {
        return this._collection.length
    }

    get isEmpty () {
        return this._collection.length === 0
    }

}