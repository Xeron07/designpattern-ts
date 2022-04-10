export default abstract class Beverage {
  description: string = "Default Description";

  getDescription = (): string => this.description;

  abstract cost(): number;
}
