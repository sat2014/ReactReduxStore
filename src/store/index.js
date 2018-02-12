import React from 'react';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
//import {devToolsEnhancer} from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

// const storeWithMiddleware = () => {
//     return (createStore(reducer, devToolsEnhancer(), applyMiddleware(ReduxThunk, logger)))
// }
const enhancer = composeWithDevTools(
    applyMiddleware(ReduxThunk, logger),
   // DevTools.instrument()
    //window.devToolsExtension ? window.devToolsExtension() : f => f
  )

  const storeWithMiddleware = createStore(rootReducer, enhancer)
//const storeWithMiddleware = createStore(reducer, devToolsEnhancer(), applyMiddleware(ReduxThunk, logger))

export default storeWithMiddleware