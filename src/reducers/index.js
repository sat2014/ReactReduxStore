import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import displayNameReducer from './displayNameReducer'
import {items, itemsHasErrored, itemsIsLoading} from './itemReducer'

const counterApp = combineReducers({
  counterReducer,
  displayNameReducer,
  items,
  itemsHasErrored,
  itemsIsLoading
})

export default counterApp
