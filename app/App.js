import { CarsController } from "./Controllers/CarsController.js";
import { HouseController } from "./Controllers/HousesController.js";

class App {
  carsController = new CarsController()

  housesController = new HouseController()
}

window["app"] = new App();
