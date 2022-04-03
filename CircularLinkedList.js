//Circular Linked List
class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._length = 0;
  }

  addToTail(item) {
    const newNode = {
      value: item,
      next: null
    }

    if(this._length == 0) {
      this.head = newNode;
      this.head.next = this.head
    } else {
      newNode.next = this.head;
      this.tail.next = newNode
    }

    this.tail = newNode;
    this._length++;
  }
}

const newClist = new CircularLinkedList();

newClist.addToTail('Vineet');
newClist.addToTail('Kirti');
newClist.addToTail('Amit');
newClist.addToTail('Roma');
