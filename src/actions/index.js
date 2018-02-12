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

export const itemsHasErrored = bool => {
  return {
      type: actionType.ITEMS_HAS_ERRORED,
      hasErrored: bool
  };
}

export const itemsIsLoading = bool => {
  return {
      type: actionType.ITEMS_IS_LOADING,
      isLoading: bool
  };
}

export const itemsFetchDataSuccess = items => {
  return {
      type: actionType.ITEMS_FETCH_DATA_SUCCESS,
      items
  };
}

export const itemsFetchData = url => {
  return (dispatch) => {
      dispatch(itemsIsLoading(true));

      fetch(url)
          .then((response) => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }

              dispatch(itemsIsLoading(false));

              return response;
          })
          .then((response) => response.json())
          .then((items) => dispatch(itemsFetchDataSuccess(items)))
          .catch(() => dispatch(itemsHasErrored(true)));
  };
}
