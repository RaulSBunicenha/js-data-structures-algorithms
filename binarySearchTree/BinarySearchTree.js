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
        if (!this.isPresent(data)) return;

        function removeNode (node, data) {
            if (node.data === data) {
                if (!node.left && !node.right) return;
                if (!node.left) return node.right
                if (!node.right) return node.left

                let tempNode = node.right
                while (tempNode.left) tempNode = tempNode.left

                node.data = tempNode.data
                node.right = removeNode(node.right, tempNode.data)
                return node
            }

            if (data < node.data) {
                node.left = removeNode(node.left, data)
                return node
            }

            node.right = removeNode(node.right, data)
            return node
        }

        this.#root = removeNode(this.#root, data)
    }
}