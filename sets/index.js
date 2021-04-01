/**
 * Sets
 * Does Not Have a Index
 * It's required different elements
 */

import MySet from './MySet.js';

{
    const set1 = new MySet()
    set1.add('a')
    set1.add('b')
    set1.add('a')
    set1.add('c','d')
    set1.remove('b')
    console.log('set1', set1.size, set1.values)

    const set2 = new MySet()
    set2.add('a')
    set2.add('myset1')
    set2.add('myset3')
    console.log('set2', set2.size, set2.values)

    console.log('set1 union set2', set1.union(set2).values)
    console.log('set1 intersection set2', set1.intersection(set2).values)
    console.log('set1 difference set2', set1.difference(set2).values)
    console.log('set2 difference set1', set2.difference(set1).values)
    console.log('set1 subset set2', set1.subset(set2))
}