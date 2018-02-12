import * as actionType from '../actions/ActionType';

export const items = (state = [], action) => {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.items;

        default:
            return state;
    }
}

export const itemsHasErrored = (state = false, action) => {
    switch (action.type) {
        case actionType.ITEMS_HAS_ERRORED:
            return action.itemsHasErrored;

        default:
            return state;
    }
}

export const itemsIsLoading = (state = false, action) => {
    switch (action.type) {
        case actionType.itemsIsLoading:
            return action.isLoading;

        default:
            return state;
    }
}


