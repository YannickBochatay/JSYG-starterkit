import { createStore, combineReducers, applyMiddleware } from "redux"
import thunkMiddleware from 'redux-thunk'
import { setLocaleToFrench } from "../actions/intl"

import intl from '../reducers/intl'


const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV !== "production") {

  const createLogger = require(`redux-logger`);
  const logger = createLogger();
  middlewares.push(logger);
}


const asyncReducers = {}


function createReducer() {

  return combineReducers({
    intl,
    ...asyncReducers
  });
}


export const createAndConfigStore = () => {

  let store = createStore(

    combineReducers({intl,...{}}),

    applyMiddleware(...middlewares)
  )

  store.dispatch(setLocaleToFrench())

  return store
}


export const injectAsyncReducer = (store, name, asyncReducer) => {

  asyncReducers[name] = asyncReducer

  return store.replaceReducer(createReducer(asyncReducers))
}
