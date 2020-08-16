import { combineReducers } from "redux";
import launchReducer from "./launch";

export default combineReducers({ 
    launches : launchReducer
});
