import { Person } from "./person.js";
export class Student extends Person {
  constructor(name, gender, MSV, year, point) {
    super(name, gender);
    this.MSV = MSV;
    this.year = year;
    this.point = point;
  }
}
