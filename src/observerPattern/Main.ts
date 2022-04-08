import BillboardScreen from "./billboardScreen";
import NewsChannel from "./NewsChannel";
import Observer from "./Observer";
import SmallScreen from "./smallScreen";

export default class ObserverMain {
  main(): void {
    let bbcNews = new NewsChannel();

    let bigScreen: Observer = new BillboardScreen();
    let smallScreen: Observer = new SmallScreen();

    bbcNews.addObserver(bigScreen);
    bbcNews.addObserver(smallScreen);

    bbcNews.breakingNews("chelsea won the match");

    let tv: Observer = new SmallScreen();

    bbcNews.removeObserver(smallScreen);

    bbcNews.breakingNews("Bangladesh won the match");

    bbcNews.addObserver(tv);

    bbcNews.breakingNews("This is observer bro...");
  }
}
