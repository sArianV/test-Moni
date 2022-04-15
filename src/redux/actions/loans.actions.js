import {
    REQUEST_LOAN,
    SET_LOADING,
} from '../types/loans.types';

export const request_loan = (prestamo) => {
    // petisiones aca
    return {
        type: REQUEST_LOAN,
        payload: prestamo,
    };
}

export const set_loading = (loading) => {
    return {
        type: SET_LOADING,
        payload: loading,
    };
}