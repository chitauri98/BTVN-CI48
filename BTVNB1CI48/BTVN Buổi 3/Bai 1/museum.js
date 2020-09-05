import { Destination } from "./destination.js";

export class Museum extends Destination {
  constructor(name, price) {
    super(name);
    this.price = price;
  }
}
