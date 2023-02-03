import { ISortable } from "./ISortable";

export class CharacterGroup implements ISortable {
  data: string;

  constructor(string: string) {
    this.data = string;
  }

  get length(): number {
    return this.data.length;
  }

  swap(leftPos: number, rightPos: number): void {
    let charArray = this.data.split(""); //turns string into an array of strings
    let tempLeft = charArray[leftPos];
    charArray[leftPos] = charArray[rightPos];
    charArray[rightPos] = tempLeft;
    this.data = charArray.join(""); // reconvert array of strings back to whole string after swap occurs
  }

  compare(leftPos: number, rightPos: number): boolean {
    //AsciiLeft/right stores the lowercase Ascii codepoint number of the character
    let AsciiLeft = this.data.toLowerCase().charCodeAt(leftPos);
    let AsciiRight = this.data.toLowerCase().charCodeAt(rightPos);
    return AsciiLeft > AsciiRight;
  }
}
