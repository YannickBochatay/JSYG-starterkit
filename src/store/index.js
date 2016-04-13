import { createStore, combineReducers } from "redux"
import { setLocaleToFrench } from "../actions/intl"

import intl from '../reducers/intl'


let asyncReducers = {}


function createReducer() {

  return combineReducers({
    intl,
    ...asyncReducers
  });
}


export const createAndConfigStore = () => {

  let store = createStore( combineReducers({intl,...{}}) )

  store.dispatch(setLocaleToFrench())

  return store
}


export const injectAsyncReducer = (store, name, asyncReducer) => {

  asyncReducers[name] = asyncReducer

  return store.replaceReducer(createReducer(asyncReducers))
}
