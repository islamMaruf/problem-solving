const Node = require('./Node')

class SingleLinkedList {

    constructor(value) {
        let node = new Node(value);
        this.head = node;
        this.tail = node;
        this.length = 1;
    }

    append(value) {
        let node = new Node(value)
        this.tail.next = node;
        this.tail = node;
        this.length++;
        return this;
    }

    prepend(value) {
        let node = new Node(value, this.head);
        // node.next = this.head;
        this.head = node;
        this.length++;
        return this;
    }

    appendAtPosition(value, position) {
        if (position == 1) {
            this.prepend(value)
        } else if (position == this.length + 1) {
            this.append(value)
        } else {
            let new_node = new Node(value);
            let prev_node = this.findNode(position - 1);
            new_node.next = prev_node.next
            prev_node.next = new_node;
            this.length++;
        }
        return this;
    }

    findNode(n) {
        let count = 1;
        let data = this.head;
        while (data != null) {
            if (count == n) break;
            count++;
            data = data.next;
        }
        return data;
    }

    delete(position) {
        if (position == 1) {
            this.head = this.head.next;
        } else if (position == this.length) {
            let prev_node = this.findNode(position - 1);
            prev_node.next = null;
            this.tail = prev_node;
        } else {
            let prev_node = this.findNode(position - 1);
            prev_node.next = prev_node.next.next

        }
        this.length--;
        return this;
    }

    update(value, position){
        let node = this.findNode(position)
        node.value = value;
        return this;
    }

    print() {
        let data = this.head;
        while (data != null) {
            console.log( data.value)
            data = data.next;
        }
    }
}


/**
 * 1. Create a node
 *                               head -> --->  tail
 * 2. node contains ------------ 100 -> 200 -> 300 -> NULL
 *  {
 *      value: 100,
 *      next: null
 *  }
 */

module.exports =  SingleLinkedList;