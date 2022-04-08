import Quack from "./IQuack";

export default class Quacks implements Quack {
  quack(): void {
    console.log("quack");
  }
}
