import { ISortable } from "./ISortable";

class Node {
  next: Node | null = null;
  data: number;
  constructor(data: number) {
    this.data = data;
  }
}

export class LinkedListGroup implements ISortable {
  head: Node | null = null;

  // Create Node out of data and attach to end of list
  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  // Should return number of Nodes in List
  get length(): number {
    let node: Node | null = this.head;
    let counter = 0;
    while (node) {
      // goes through all nodes and increments counter until null, then returns the counter to get length
      counter++;
      node = node.next;
    }
    return counter;
  }

  // Convenience method that returns a Node at a given index
  at(index: number): Node {
    if (!this.head) {
      throw new Error("Error: Index out of bounds");
    }
    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error("Error: Index out of bounds");
  }

  compare(leftPos: number, rightPos: number): boolean {
    return this.at(leftPos).data > this.at(rightPos).data;
  }

  swap(leftPos: number, rightPos: number): void {
    // tried to rearrange pointers
    //   this.at(rightPos).next = this.at(leftPos);
    //   this.at(leftPos).next = this.at(rightPos + 1);
    //   this.at(leftPos - 1).next = this.at(rightPos);
    // }

    let tempLeft = this.at(leftPos).data;
    this.at(leftPos).data = this.at(rightPos).data;
    this.at(rightPos).data = tempLeft;
  }

  print(): void {
    if (!this.head) {
      return;
    }
    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
