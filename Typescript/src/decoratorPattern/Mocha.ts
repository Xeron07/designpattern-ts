import Beverage from "./Beverage";
import Continental from "./continentalWrapper";

export default class Mocha extends Continental {
  beverage: Beverage;
  constructor(beverage: Beverage) {
    super();
    this.description = "Mocha";
    this.beverage = beverage;
  }

  getDescription = (): string => {
    return this.beverage.getDescription() + "," + this.description;
  };

  cost(): number {
    return this.beverage.cost() + 0.5;
  }
}
