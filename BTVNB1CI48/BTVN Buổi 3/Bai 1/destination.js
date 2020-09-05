export class Destination {
  constructor(name) {
    this.name = name;
    this.img = [];
    this.dateModified = new Date().toISOString();
  }
  set newImg(img) {
    this.img.push(img);
    this.dateModified = new Date().toISOString();
  }
  get info() {
    return `
        Welcome to: ${this.name} ;
        Some the review about place : ${this.img};
        Update at: ${this.dateModified}; 
        `;
  }
}
