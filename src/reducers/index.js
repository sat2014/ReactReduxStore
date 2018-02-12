import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import displayNameReducer from './displayNameReducer'

const counterApp = combineReducers({
  counterReducer,
  displayNameReducer
})

export default counterApp
