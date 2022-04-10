"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Main_1 = __importDefault(require("./decoratorPattern/Main"));
//strategy pattern test
// let mainClass = new Main();
// mainClass.main();
//observer pattern test
// let observerMain = new ObserverMain();
// observerMain.main();
//decorator pattern
(0, Main_1.default)();
