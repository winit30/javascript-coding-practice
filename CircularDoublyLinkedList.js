class CircularDoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._length = 0;
  }

  addToList(item) {
    const newNode = {
      prev: null,
      next: null,
      value: item
    }

    if(this._length === 0) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.head.prev = newNode;
    }

    this.tail = newNode;
    this._length++;
  }

  removeFromHead() {
    if(this._length === 0) {
      return undefined;
    }

    const itemToRemove = this.head;
    this.head = this.head.next;
    this.head.prev = itemToRemove.prev;
    this.tail.next = this.head;
    this._length--;
  }
}

const cdll = new CircularDoublyLinkedList();

cdll.addToList("Vineet");
cdll.addToList("Amit");
cdll.addToList("Kirti");
cdll.addToList("Roma");
cdll.addToList("Reyu");
cdll.addToList("Munny");
