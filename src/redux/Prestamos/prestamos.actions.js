import {
    SOLICITAR_PRESTAMO,
    VERIFICAR_PRESTAMO,
    SET_LOADING,
} from './prestamos.types';

export const solicitar_prestamo = (prestamo) => {
    // petisiones aca
    return {
        type: SOLICITAR_PRESTAMO,
        payload: prestamo,
    };
}

export const verificar_prestamo = (prestamo) => {
    // petisiones aca
    return {
        type: VERIFICAR_PRESTAMO,
        payload: prestamo,
    };
}

export const set_loading = (loading) => {
    return {
        type: SET_LOADING,
        payload: loading,
    };
}