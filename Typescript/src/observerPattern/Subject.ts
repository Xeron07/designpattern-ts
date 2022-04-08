import Observer from "./Observer";

export default interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyChanges(): void;
}
