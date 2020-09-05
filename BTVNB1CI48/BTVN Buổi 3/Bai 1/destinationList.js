import { Destination } from "./destination.js";
import { Park } from "./park.js";
import { Museum } from "./museum.js";
import { Restaurant } from "./restaurant.js";

class DestinationsList {
  constructor() {
    this.destinations = [];
    this.dateModified = new Date().toISOString();
    console.log(this.destinations);
  }
  set newDestination(destination) {
    if (destination instanceof Destination) this.destinations.push(destination);
    else return;
    //Vẫn truyền vào bình thường vì mình đã import destination và các js khác rồi
  }
  findDestination(name) {
    var findDestinationName = this.destinations.filter((temp) => {
      if (temp.name.indexOf(name) > -1) {
        return temp;
      }
    });
    console.log(`Find destination ${name} :`);
    console.log(findDestinationName);
    return findDestinationName;
  }
  get totalPrice() {
    console.log(`Money to be paid for your tour :`);
    console.log(
      this.destinations.map((temp) => temp.price).reduce((a, b) => a + b)
    );
  }
}
let newDestinationsList = new DestinationsList();

let thaiBinhPark = new Park("Thai Binh Park", 5);
thaiBinhPark.img =
  "https://media.laodong.vn/Storage/NewsPortal/2019/11/19/766929/Lisa-Plo_Rdyz.jpg";
thaiBinhPark.info;
newDestinationsList.newDestination = thaiBinhPark;

let thaiBinhMuseum = new Museum("Thai Binh Museum Picturesque", 7);
thaiBinhMuseum.img =
  "https://media.laodong.vn/Storage/NewsPortal/2019/11/19/766929/Lisa-Plo_Rdyz.jpg";
thaiBinhMuseum.info;
newDestinationsList.newDestination = thaiBinhMuseum;

let newRestaurant = new Restaurant("Thai Binh Restaurant", 6);
newRestaurant.img =
  "https://media.laodong.vn/Storage/NewsPortal/2019/11/19/766929/Lisa-Plo_Rdyz.jpg";
newRestaurant.info;
newDestinationsList.newDestination = newRestaurant;

newDestinationsList.findDestination("Thai Binh");
newDestinationsList.findDestination("Picturesque");

newDestinationsList.totalPrice;
