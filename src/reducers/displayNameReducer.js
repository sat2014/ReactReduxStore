import * as actionType from '../actions/ActionType';

const displayNameReducer = (state='', action) => {
    let newState;
    switch (action.type) {
        case actionType.DISPLAY_NAME:
             return newState = action.payload
        default:
             return state
    }
  }

export default displayNameReducer