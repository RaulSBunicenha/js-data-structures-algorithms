export default class Node {
    data
    left
    right

    constructor (data) {
        this.data = data
    }

    #addLeft (data) {
        if (!this.left) {
            this.left = new Node(data)
            return;
        }

        return this.left.addChild(data)
    }

    #addRight (data) {
        if (!this.right) {
            this.right = new Node(data)
            return;
        }

        return this.right.addChild(data)
    }

    addChild (data) {
        if (data < this.data) return this.#addLeft(data)
        return this.#addRight(data)
    }
}