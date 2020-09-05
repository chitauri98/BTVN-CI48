import { Lecturers } from "./lecturers.js";
import { Student } from "./student.js";

class Classes {
  constructor(id, subjects, lecturers) {
    this.id = id;
    this.subjects = subjects;
    this.lecturers = lecturers;
    this.students = [];
    console.log(this.lecturers);
    console.log(this.students);
  }
  set newStudent(student) {
    if (student instanceof Student) this.students.push(student);
    else return;
  }
  findStudent(name) {
    return this.students.filter((x) => {
      return x.name == name;
    });
  }
  findPoint(point) {
    let findPoint = this.students.filter(function(student) {
        return student.point > point;
    })
    return findPoint;
}
}

let gvCNTT = new Lecturers("Nga", "female", "Giáo Sư Tiến Sĩ");
let classCNTT = new Classes("MindX", "CNTT", gvCNTT);
let student1 = new Student("Lisa", "female", 1, "2019-2020", 10);
let student2 = new Student("Jennie", "female", 2, "2019-2020", 8);
let student3 = new Student("Rose", "female", 3, "2019-2020", 7);
let student4 = new Student("Jisoo", "female", 4, "2019-2020", 5);

classCNTT.newStudent = student1;
classCNTT.newStudent = student2;
classCNTT.newStudent = student3;
classCNTT.newStudent = student4;

const find = classCNTT.findStudent("Lisa");
console.log(find);

const upSix = classCNTT.findPoint(6);
console.log(upSix);
