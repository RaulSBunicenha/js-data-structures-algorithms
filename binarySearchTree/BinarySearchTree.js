import Node from './Node.js'

export default class BinarySearchTree {
    #root

    add (data) {
        const node = this.root
        
        if (!this.#root) {
            this.#root = new Node(data)
            return;
        }

        return this.#root.addChild(data)
    }

    get values () {
        if (!this.#root) return {}
        return this.#root
    }

    findMin () {
        let minNode = this.#root
        while (minNode.left) minNode = minNode.left
        return minNode.data
    }

    findMax () {
        let minNode = this.#root
        while (minNode.right) minNode = minNode.right
        return minNode.data
    }

    find (data) {
        let node = this.#root
        while(node.data !== data) {
            if (data < node.data) {
                node = node.left
                continue
            }
            
            node = node.right

            if (!node) return null
        }
        return node
    }

    isPresent (data) {
        let node = this.#root
        while (node) {
            if (node.data === data) return true
            if (data < node.data) node = node.left
            else node = node.right
        }
        return false
    }

    remove (data) {
        if (this.#root.data === data) {
            this.#root = undefined
            return;
        }

        this.#root.removeChild(data)
    }
}