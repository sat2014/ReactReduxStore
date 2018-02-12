import React from 'react';
import { render } from 'react-dom';
// import { createStore, applyMiddleware } from 'redux';
 import { Provider } from 'react-redux';
import App from './components/App';
// import reducer from './reducers';
// import { devToolsEnhancer } from 'redux-devtools-extension';
// import ReduxThunk from 'redux-thunk';
// import logger from 'redux-logger';
import storeWithMiddleware from './store/index'



//store.subscribe(()=>console.log(store.getState()))

// const consoleMessages = store => next => action => {
//   console.groupCollapsed(`dispatching action =>{action.type}`)
// }

//const store = createStore(reducer, devToolsEnhancer());

//const storeWithMiddleware = createStore(reducer, devToolsEnhancer(), applyMiddleware(ReduxThunk, logger)) //() => applyMiddleware(ReduxThunk, logger)(store)


render(
  <Provider store={storeWithMiddleware}>
    <App />
  </Provider>,
  document.getElementById('root')
)
