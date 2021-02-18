import { ISortable } from "./ISortable";

export class NumberGroup implements ISortable {
  data: number[];

  constructor(numbers: number[]) {
    this.data = numbers;
  }

  get length(): number {
    return this.data.length;
  }

  swap(leftPos: number, rightPos: number): void {
    let tempLeft = this.data[leftPos];
    this.data[leftPos] = this.data[rightPos];
    this.data[rightPos] = tempLeft;
  }

  compare(leftPos: number, rightPos: number): boolean {
    return this.data[leftPos] > this.data[rightPos];
  }
}
