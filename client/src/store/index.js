import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from './jobReducer.js'

const store = createStore(reducer,applyMiddleware(thunk))

export default store