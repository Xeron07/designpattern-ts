"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mallarDuck_1 = __importDefault(require("./mallarDuck"));
class Main {
    constructor() {
        this.main = () => {
            let duck = new mallarDuck_1.default();
            duck.setName("MallarDuck");
            duck.display();
            duck.performFly();
            duck.performQuack();
        };
    }
}
exports.default = Main;
