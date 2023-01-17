import { reducer as Appreducer } from "./App/reducer";
import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunks from "redux-thunk";

const rootReducer = combineReducers({ Appreducer });

const store = legacy_createStore(rootReducer, applyMiddleware(thunks));

export { store };
