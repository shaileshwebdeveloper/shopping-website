import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as ProductReducer } from "./product/reducer";

const rootReducer = combineReducers({ ProductReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
