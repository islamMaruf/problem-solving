const SingleLinkedList = require('./SingleLinkedList')

let list = new SingleLinkedList(100)

list.append(120)
    .append(130)
    .append(140)
    .prepend(50)
    .prepend(40)
    .prepend(30)
    .prepend(25)
    .prepend(10)
    .appendAtPosition(20, 1)
    .appendAtPosition(150, 8)
    .appendAtPosition(160, 4)
    .delete(4)
    .delete(1)
    .delete(7)
    .update(111,2)
    .print();

console.log(list)