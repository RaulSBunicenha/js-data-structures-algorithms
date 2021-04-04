import Queue from './Queue.js'

export default class PriorityQueue extends Queue {
    enqueue (element, priority = false) {
        if (this.isEmpty || !!!priority || priority >= this.size) {
            this._collection.push(element)
            return;
        }

        if (priority < 0) priority = 0
        
        this._collection = this._collection.reduce((collection, item, key) => {
            if (key  === priority) collection.push(element)

            collection.push(item)
            return collection
        }, [])
    }
}