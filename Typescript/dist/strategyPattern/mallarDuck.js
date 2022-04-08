"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const duck_1 = __importDefault(require("./duck"));
const flyHigh_1 = __importDefault(require("./flyHigh"));
const quack_1 = __importDefault(require("./quack"));
class MallarDuck extends duck_1.default {
    constructor() {
        super();
        this.setName = (name) => {
            this.name = name;
        };
        this.flyAble = new flyHigh_1.default();
        this.quackAble = new quack_1.default();
    }
    performFly() {
        if (this.flyAble)
            this.flyAble.fly();
    }
    performQuack() {
        if (this.quackAble)
            this.quackAble.quack();
    }
    display() {
        console.log(this.name);
    }
}
exports.default = MallarDuck;
