
//LinkedList
class LinkedList {
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

      if(this._length === 0) {
        this.head = newNode;
      } else {
        this.tail.next = newNode;
      }

      this.tail = newNode;
      this._length++;
    }

    addToHead(item) {
      const newNode = {
        value: item,
        next: null
      }

      if(this._length === 0) {
        this.tail = newNode;
      } else {
        newNode.next = this.head;
      }

      this.head = newNode;
      this._length++;
    }

    removeFromHead() {
      if(this._length === 0) {
        return undefined;
      }
      const itemToReturn = this.head.value;
      this.head = this.head.next;
      this._length--;
      return itemToReturn;
    }

    find(value) {
      let currentNode = this.head;
      for(let i = 0; i < this.size; i++) {
        if(currentNode.value === value) {
          return currentNode;
        }
        currentNode = currentNode.next;
      }
      return currentNode;
    }

    remove(value) {
      if(this.size === 0) {
        return undefined;
      }

      if (this.head.value === value) {
          return this.removeFromHead();
      }

      let previousNode = this.head;
      let currentNode = previousNode.next;

      while(currentNode) {
        if(currentNode.value === value) {
          break;
        } else {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
      }

      if(currentNode == null) {
        return undefined;
      }

      previousNode.next = currentNode.next;
      this._length--;
      return this;
    }

  	get size() {
    		return this._length;
    }
}

const newList = new LinkedList();

newList.addToTail("Vineet");
newList.addToTail("Kirti");
