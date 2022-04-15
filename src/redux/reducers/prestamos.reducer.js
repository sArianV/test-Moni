import {
    SOLICITAR_PRESTAMO,
    VERIFICAR_PRESTAMO,
    SET_LOADING
} from '../types/prestamos.types';

const INITIAL_STATE = {
    loading: false,
    response_verificar: null,
    response: null,
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case SOLICITAR_PRESTAMO:
            return {
                ...state, response_solicitud: action.payload,
            };

        case VERIFICAR_PRESTAMO:
            return {
                ...state,  response_verificar: action.payload,
            };

        case SET_LOADING:
            return {
                ...state, loading: action.payload,
            };

        default: return state;
    }
};

export default reducer;