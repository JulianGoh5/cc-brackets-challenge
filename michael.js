class LinkedNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    toString = () => {
        return this.value;
    };
}

class LinkedList {
    head = null;
    tail = null;

    toArray = () => {
        let currentNode = this.head;
        if (currentNode === this.tail) {
            return [currentNode.toString()];
        }
        const linkedListArr = [];
        while (currentNode !== this.tail) {
            linkedListArr.push(currentNode.toString());
            currentNode = currentNode.next;
        }
        return linkedListArr;
    };

    peek = () => {
        if (this.head === null) {
            return null;
        }
        return this.tail.value;
    };

    pop = () => {
        if (this.head === null) {
            return null;
        }
        let deletedNode;
        if (this.head === this.tail) {
            deletedNode = this.head;
            this.head = null;
            this.tail = null;
            return deletedNode;
        }
        let currentNode = this.head;
        while (currentNode.next !== this.tail) {
            currentNode = currentNode.next;
        }
        deletedNode = this.tail;
        if (currentNode === this.head) {
            this.head.next = null;
            this.tail = this.head;
            return;
        }
        this.tail = currentNode;
        this.tail.next = null;
        return deletedNode;
    };

    push = (value) => {
        const newNode = new LinkedNode(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = this.head;
            return newNode;
        }
        const prevTail = this.tail;
        this.tail = newNode;
        prevTail.next = this.tail;
        return newNode;
    };
}

/*
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

const openBrackets = ["[", "{", "("];
const closeBrackets = ["]", "}", ")"];

function isBalanced(s) {
    const stack = new LinkedList();
    [...s].forEach((char) => {
        if (openBrackets.indexOf(char) !== -1) {
            const pushedChar = stack.push(
                closeBrackets[openBrackets.indexOf(char)],
            );
        }

        if (closeBrackets.indexOf(char) !== -1) {
            if (char !== stack.peek()) return "FALSE";
            stack.pop();
        }
    });
    if (stack.head === null) return "TRUE";
    return "FALSE";
}

console.log(isBalanced(input));
