import {
    REQUEST_LOAN,
    VERIFY_LOAN,
    SET_LOADING
} from '../types/loans.types';

const INITIAL_STATE = {
    loading: false,
    response_verificar: null,
    response: null,
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case REQUEST_LOAN:
            return {
                ...state, response_solicitud: action.payload,
            };

        case SET_LOADING:
            return {
                ...state, loading: action.payload,
            };

        default: return state;
    }
};

export default reducer;