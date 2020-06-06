import { createStore, applyMiddleware } from "redux"
import { save, load } from "redux-localstorage-simple"

import rootReducer from "./reducers"

const reduxCreateStore = () => {
  return createStore(
    rootReducer,
    []//load(),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}

export default reduxCreateStore//applyMiddleware(save())(reduxCreateStore)
