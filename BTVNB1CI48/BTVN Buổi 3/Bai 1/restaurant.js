import { Destination } from "./destination.js";

export class Restaurant extends Destination {
  constructor(name, price) {
    super(name);
    this.price = price;
  }
}
