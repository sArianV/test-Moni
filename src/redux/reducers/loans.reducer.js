import {
    REQUEST_LOAN,
    GET_LOANS,
    SET_LOADING
} from '../types/loans.types';

const INITIAL_STATE = {
    loading: false,
    response_verificar: null,
    response: null,
    loans: null,
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case REQUEST_LOAN:
            return {
                ...state, response_solicitud: action.payload,
            };
        
        case GET_LOANS:
            const loans = []
            Object.keys(action.payload).map(key => {
                loans.push({
                    id: key,
                    ...action.payload[key]
                })
            })
            return {
                ...state, loans: loans,
            };

        case SET_LOADING:
            return {
                ...state, loading: action.payload,
            };

        default: return state;
    }
};

export default reducer;