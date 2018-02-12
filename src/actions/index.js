import * as actionType from './ActionType';

export const addCounter = () => ({
  type: actionType.ADD_COUNTER,
  payload: 1
});

export const removeCounter = () => ({
  type: actionType.REMOVE_COUNTER,
  payload: 1
});

export const doubleAddCounter = () => ({
  type: actionType.DOUBLE_ADD_COUNTER,
  payload: 2
});

export const displayName = (payload='Stranger') => ({
  type: actionType.DISPLAY_NAME,
  payload: payload
});