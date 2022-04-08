"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const billboardScreen_1 = __importDefault(require("./billboardScreen"));
const NewsChannel_1 = __importDefault(require("./NewsChannel"));
const smallScreen_1 = __importDefault(require("./smallScreen"));
class ObserverMain {
    main() {
        let bbcNews = new NewsChannel_1.default();
        let bigScreen = new billboardScreen_1.default();
        let smallScreen = new smallScreen_1.default();
        bbcNews.addObserver(bigScreen);
        bbcNews.addObserver(smallScreen);
        bbcNews.breakingNews("chelsea won the match");
        let tv = new smallScreen_1.default();
        bbcNews.removeObserver(smallScreen);
        bbcNews.breakingNews("Bangladesh won the match");
        bbcNews.addObserver(tv);
        bbcNews.breakingNews("This is observer bro...");
    }
}
exports.default = ObserverMain;
