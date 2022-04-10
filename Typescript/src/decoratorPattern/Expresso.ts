import Beverage from "./Beverage";

export default class Expresso extends Beverage {
  constructor() {
    super();
    this.description = "Expresso";
  }

  cost(): number {
    return 1.2;
  }
}
