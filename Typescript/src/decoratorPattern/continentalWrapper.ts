import Beverage from "./Beverage";

export default abstract class Continental extends Beverage {
  abstract getDescription: () => string;
}
