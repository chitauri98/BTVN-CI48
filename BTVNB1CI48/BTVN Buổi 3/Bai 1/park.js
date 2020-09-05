import { Destination } from "./destination.js";

export class Park extends Destination {
  constructor(name, price) {
    super(name);
    this.price = price;
  }
}
