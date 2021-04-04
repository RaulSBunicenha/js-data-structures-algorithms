/**
 * Queue
 * Similar to stack
 * But the first item is the one which is treat first
 */
import PriorityQueue from './PriorityQueue.js';
import Queue from './Queue.js'

{
    console.log('Simple Queue ---------------------')
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
}

{
    console.log('Priority Queue ---------------------')
    const myQueue = new PriorityQueue()
    myQueue.enqueue('a')
    myQueue.enqueue('c')
    myQueue.print()
    myQueue.enqueue('b', 1)
    myQueue.print()
    myQueue.enqueue('d', 27)
    myQueue.print()
    myQueue.enqueue('z', -1)
    myQueue.print()
}