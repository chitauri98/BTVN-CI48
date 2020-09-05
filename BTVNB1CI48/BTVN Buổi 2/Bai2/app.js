//Ăn gì hôm nay ?
class Meal {
  name;
  foods; 
  dateModified;
  constructor(name, foods, dateModified) {
    this.name = name;
    this.foods = [];
    this.dateModified = new Date().toISOString();
  }
  addFood(food) {
    this.foods.push(food);
  }
  calculatePrice() {
    let total = 0;
    for (let i = 0; i < this.foods.length; i++) {
        total += this.foods[i].price;
    }
    return total;
}
  show() {
    console.log(`
      Bạn đã dùng "${this.name}" với `);
    for (let i = 0; i < this.foods.length; i++) {
      console.log(`
        Món : ${this.foods[i].name}
    `);
    }
    
    console.log(`Vào lúc: ${this.dateModified} 
    Cảm ơn quý khách !`);
  }
}

class VegetableMeal extends Meal {
  constructor(name, foods, dateModified) {
    super(name);
  }
  addFood(vegetableFood) {
    this.foods.push(vegetableFood);
  }
  calculatePrice() {
    let total = 0;
    for (let i = 0; i < this.foods.length; i++) {
        total += this.foods[i].price;
    }
    return total - total * 0.15;
}
}
class NonVegetableMeal extends Meal {
  constructor(name, foods, dateModified) {
    super(name);
  }
  addFood(nonVegetableFood) {
    this.foods.push(nonVegetableFood);
  }
  calculatePrice() {
    let total = 0;
    for (let i = 0; i < this.foods.length; i++) {
        total += this.foods[i].price;
    }
    return total - total * 0.05;
}
}
class Food {
  name;
  luxuriousName;
  price;
  constructor(name, luxuriousName, price) {
    this.name = name;
    this.luxuriousName = luxuriousName;
    this.price = price;
  }
}
class VegetableFood extends Food {
  constructor(name, luxuriousName, price) {
    super(name, luxuriousName, price);
  }
}
class NonVegetableFood extends Food {
  constructor(name, luxuriousName, price) {
    super(name, luxuriousName, price);
  }
}
console.log("Example : 1 meal và 5 food");

let first = new VegetableFood("Rau Muống", "Dior", 10);
let second = new NonVegetableFood("Rau Cải", "Versace", 20);
let third = new VegetableFood("Rau Dền", "LV", 10);
let four = new NonVegetableFood("Rau Ngót", "DG", 40);
let five = new VegetableFood("Rau Sam", "Sapphire", 30);

let allMeal = [first, second, third, four, five];

let vegetableMeal = new VegetableMeal("Menu 15%");
let nonVegetableMeal = new NonVegetableMeal("Menu 5%");

//discount 15%
console.log(vegetableMeal.name);

vegetableMeal.addFood(first);
vegetableMeal.addFood(third);
vegetableMeal.addFood(five);

console.log(vegetableMeal.show());
console.log("Được giảm giá 15% và phải thanh toán: ", vegetableMeal.calculatePrice() , "nghìn");

//discount 5%
console.log(nonVegetableMeal.name);
nonVegetableMeal.addFood(second);
nonVegetableMeal.addFood(four);

console.log(nonVegetableMeal.show());
console.log("Được giảm giá 5% và phải thanh toán: " , nonVegetableMeal.calculatePrice(), "nghìn");

//* chữa bài */
//food phải là instance của VegetableFood
// addFood(food){
// if(food instanceof Vegetable){
//   super.addFood(food);
// }
// }