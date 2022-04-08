import Observer from "./Observer";
import Subject from "./Subject";

export default class NewsChannel implements Subject {
  observers: Observer[];
  message: string;

  constructor() {
    this.observers = [];
    this.message = "Default News";
  }

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    let observerIndex: number = this.observers.indexOf(observer);
    if (observerIndex != -1) {
      this.observers.splice(observerIndex, 1);
    } else {
      console.log("Observer not added");
    }
  }

  notifyChanges(): void {
    for (let observer of this.observers) {
      observer.update(this.message);
    }
  }

  breakingNews(news: string): void {
    this.message = news;
    this.notifyChanges();
  }
}
