/**
 * Queue
 * Similar to stack
 * But the first item is the one which is treat first
 */

import Queue from './Queue.js'

const myQueue = new Queue();
myQueue.enqueue('a')
myQueue.enqueue('b')
myQueue.print()
console.log(myQueue.dequeue())
console.log(myQueue.front)
myQueue.enqueue('a')
myQueue.enqueue('c')
myQueue.print()
console.log(myQueue.size)