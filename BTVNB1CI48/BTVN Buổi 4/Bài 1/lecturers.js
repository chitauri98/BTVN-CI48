import { Person } from "./person.js";
export class Lecturers extends Person {
  constructor(name, gender, level) {
    super(name, gender);
    this.level = level;
  }
}
