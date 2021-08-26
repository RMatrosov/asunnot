import {combineReducers} from "redux";
import cards from "./cards";
import popup from "./popup";
import filters from "./filters";
import card from "./singleCard";
import favorites from "./favorites";
import filterInfo from "./filterInfo";
import bids from "./bids";


const rootReducer = combineReducers({
  cards,
  popup,
  filters,
  card,
  favorites,
  filterInfo,
  bids

});

export default rootReducer;
