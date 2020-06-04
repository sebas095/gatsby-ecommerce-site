import { createStore } from "redux"

export default () =>
  createStore(
    state => state,
    { hello: "world" },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
