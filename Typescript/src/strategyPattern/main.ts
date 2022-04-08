import MallarDuck from "./mallarDuck";

export default class Main {
  main = () => {
    let duck = new MallarDuck();
    duck.setName("MallarDuck");
    duck.display();
    duck.performFly();
    duck.performQuack();
  };
}
