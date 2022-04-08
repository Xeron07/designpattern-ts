import Fly from "./IFly";
import Quack from "./IQuack";

abstract class Duck {
  name: String = "";
  flyAble: Fly | null = null;
  quackAble: Quack | null = null;

  abstract display(): void;
  abstract performFly(): void;
  abstract performQuack(): void;
}

export default Duck;
