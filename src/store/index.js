import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import reducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const composeEnhancers = composeWithDevTools({})
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk, promise())))

/** Export the store */
export default store
