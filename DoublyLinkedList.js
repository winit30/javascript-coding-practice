
// DoublyLinkedList
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._length = 0;
  }

  addToTail(item) {
    const newNode = {
      prev: null,
      value: item,
      next: null
    }

    if(this.size === 0) {
      this.head = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode
    }

    this.tail = newNode;
    this._length++;
  }

  removeFromHead() {
    if(this.size === 0) {
      return undefined;
    }

    const headValue = this.head.value;
    this.head = this.head.next;
    this.head.prev = null;
    this._length--;
    return headValue;
  }

  find(value) {
    let currentNode = this.head;

    while(currentNode) {
      if(currentNode.value === value) {
        break;
      } else {
        currentNode = currentNode.next;
      }
    }

    return currentNode;
  }

  get size() {
    return this._length;
  }
}

const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.addToTail("Vineet")
doublyLinkedList.addToTail("Amit")
doublyLinkedList.addToTail("Kajal")
doublyLinkedList.addToTail("Roma")
doublyLinkedList.addToTail("Kirti")
doublyLinkedList.addToTail("Juhi")
