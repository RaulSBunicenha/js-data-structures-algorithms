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

    #removeLeft (data) {
        if (!this.left) return;
        
        if (this.left.data === data) {
            this.left = undefined
            return;
        }

        return this.left.removeChild(data)
    }

    #removeRight (data) {
        if (!this.right) return;

        if (this.right.data === data) {
            this.right = undefined
            return;
        }

        return this.right.removeChild(data)
    }

    removeChild (data) {
        if (data < this.data) return this.#removeLeft(data)
        return this.#removeRight(data)
    }
}