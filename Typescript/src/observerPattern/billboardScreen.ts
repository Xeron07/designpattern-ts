import Observer from "./Observer";

export default class BillboardScreen implements Observer {
  update(message: string): void {
    console.log(`Screen:Big\n${message}`);
  }
}
