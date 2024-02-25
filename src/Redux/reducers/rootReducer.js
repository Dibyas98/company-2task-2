import { combineReducers } from "redux";
import clickedCity from "./clickedCity";
import SearchedCity from "./searchedCity";
import SelectedListData from "./searchedListData";
const rootReducer = combineReducers({
  clickedCity,
  SelectedListData,
  SearchedCity
});
export default rootReducer;
