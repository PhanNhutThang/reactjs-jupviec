import actionTypes from '../actions/actionTypes';

const initialState = {
    services: [],
}

const serviceReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALL_SERVICE_SUCCESS:
            state.services = action.services;
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_SERVICE_FAILDED:
            state.services = [];
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default serviceReducer;