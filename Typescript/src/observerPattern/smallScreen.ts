import Observer from "./Observer";

export default class SmallScreen implements Observer {
  update(message: string): void {
    console.log(`Screen:Small\n${message}`);
  }
}
