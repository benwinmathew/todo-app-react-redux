import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import contentReducer from './content/contentReducer'
const reducer = combineReducers({contentReducer: contentReducer})
const store = createStore(reducer,applyMiddleware(thunk));

export default store;

