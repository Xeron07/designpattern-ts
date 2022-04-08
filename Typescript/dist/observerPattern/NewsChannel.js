"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NewsChannel {
    constructor() {
        this.observers = [];
        this.message = "Default News";
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        let observerIndex = this.observers.indexOf(observer);
        if (observerIndex != -1) {
            this.observers.splice(observerIndex, 1);
        }
        else {
            console.log("Observer not added");
        }
    }
    notifyChanges() {
        for (let observer of this.observers) {
            observer.update(this.message);
        }
    }
    breakingNews(news) {
        this.message = news;
        this.notifyChanges();
    }
}
exports.default = NewsChannel;
