import Node from './Node.js'
export default class LinkedList {

    constructor() {
        this.head = null;
    }

    append(val){
        const newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    toArray(){
        let result = [];
        let current = this.head;
        if (current === null) return result;

        while (current.next !== null) {
            result.push(current.value);
            current = current.next;
        }
        result.push(current.value);
        return result;
    }

}