/**
 * Binary Search Tree
 */

import BinarySearchTree from './BinarySearchTree.js'

{
    const binarySearchTree = new BinarySearchTree()
    console.log(binarySearchTree.values)
    binarySearchTree.add(50)
    binarySearchTree.add(17)
    binarySearchTree.add(72)
    binarySearchTree.add(12)
    binarySearchTree.add(23)
    binarySearchTree.add(24)
    binarySearchTree.add(54)
    binarySearchTree.add(76)
    binarySearchTree.add(67)

    console.log('The Tree ------------------')
    console.log(binarySearchTree.values)

    console.log('The Min Value ------------------')
    console.log(binarySearchTree.findMin())

    console.log('The Max Value ------------------')
    console.log(binarySearchTree.findMax())

    console.log('Find 54 Node ------------------')
    console.log(binarySearchTree.find(54))

    console.log('Find 80 Node ------------------')
    console.log(binarySearchTree.find(80))

    console.log('Check if 17 is present ------------------')
    console.log(binarySearchTree.isPresent(17))

    console.log('Check if 80 is present ------------------')
    console.log(binarySearchTree.isPresent(80))

    console.log('Remove 80 ------------------')
    console.log(binarySearchTree.values)
    binarySearchTree.remove(80)
    console.log(binarySearchTree.values)

    console.log('Remove 76 ------------------')
    console.log(binarySearchTree.values)
    binarySearchTree.remove(76)
    console.log(binarySearchTree.values)

    console.log('Remove 72 ------------------')
    console.log(binarySearchTree.values)
    binarySearchTree.remove(72)
    console.log(binarySearchTree.values)

    console.log('Remove 17 ------------------')
    console.log(binarySearchTree.values)
    binarySearchTree.remove(17)
    console.log(binarySearchTree.values)

    console.log('Remove 50 ------------------')
    console.log(binarySearchTree.values)
    binarySearchTree.remove(50)
    console.log(binarySearchTree.values)
}
