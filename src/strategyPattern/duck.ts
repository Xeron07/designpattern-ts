import Fly from "./IFly";
import Quack from "./IQuack";

abstract class Duck {
  name: String = "";
  abstract flyAble: Fly;
  abstract quackAble: Quack;

  abstract display(): void;
}

export default Duck;
