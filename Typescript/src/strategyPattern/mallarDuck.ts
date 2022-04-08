import Duck from "./duck";
import FlyHigh from "./flyHigh";
import Fly from "./IFly";
import Quack from "./IQuack";
import Quacks from "./quack";

export default class MallarDuck extends Duck {
  constructor() {
    super();
    this.flyAble = new FlyHigh();
    this.quackAble = new Quacks();
  }

  setName = (name: String) => {
    this.name = name;
  };

  performFly(): void {
    if (this.flyAble) this.flyAble.fly();
  }

  performQuack(): void {
    if (this.quackAble) this.quackAble.quack();
  }

  display(): void {
    console.log(this.name);
  }
}
