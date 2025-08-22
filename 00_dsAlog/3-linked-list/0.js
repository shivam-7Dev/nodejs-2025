class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.size = 0;
  }

  //insert at begining
  insertAtBegining(data) {
    const node = new Node(data);
    const holder = this.head;
    this.head = node;
    node.next = holder;
    this.size += 1;
  }

  //insert at end

  insertAtEnd(data) {
    //loop through the loop and at the end add the node

    if (this.size == 0) {
      this.insertAtBegining(data);
      return;
    }

    const endNode = new Node(data);

    let node = this.head;
    console.log("node====", node);

    while (node.next != null) {
      node = node.next;
    }
    node.next = endNode;
    this.size = this.size + 1;
  }

  //insert in between

  insertAtPostion(position, data) {}
}

const linkedList = new LinkedList();
linkedList.insertAtBegining(1);
console.log("linked list=====", linkedList);
linkedList.insertAtEnd(2);
linkedList.insertAtEnd(3);

console.log(linkedList);
