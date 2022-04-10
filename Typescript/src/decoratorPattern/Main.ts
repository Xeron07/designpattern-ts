import Expresso from "./Expresso";
import Mocha from "./Mocha";
import Soy from "./Soy";

const main = () => {
  let beverage = new Mocha(new Soy(new Expresso()));
  console.log(beverage.getDescription());
  console.log(beverage.cost());
};

export default main;
