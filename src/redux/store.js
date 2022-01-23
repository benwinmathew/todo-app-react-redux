import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import addReducer from './addItem/addItemReducer'
const reducer=combineReducers({addReducer:addReducer})
const store = createStore(reducer,applyMiddleware(thunk));

export default store;

