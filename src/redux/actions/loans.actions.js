import {
    REQUEST_LOAN,
    SET_LOADING,
    GET_LOANS
} from '../types/loans.types';

import axios from 'axios';

const options = {
    baseURL: 'https://api.moni.com.ar/api/v4',
    headers: {
        /* credential: 'ZGpzOTAzaWZuc2Zpb25kZnNubm5u', */
    },
}

export const request_loan = async (prestamo) => {
    try {
        const api_url = process.env.NEXT_PUBLIC_API_PRE_SCORE_URL

        const response = await axios.get(`https://api.moni.com.ar/api/v4/scoring/pre-score/30156149`);

        console.log(response);

        return {
            type: REQUEST_LOAN,
            payload: prestamo,
        };
    } catch (error) {
        console.log(error);
    }

}

export const get_loans = async () => {
    try {
        const api_url = process.env.NEXT_PUBLIC_API_LOAN_URL

        const response = await axios.get(api_url);

        return {
            type: GET_LOANS,
            payload: response?.data || {},
        };
    } catch (error) {
        return {
            type: GET_LOANS,
            payload: {},
        }
    }

}

export const set_loading = (loading) => {
    return {
        type: SET_LOADING,
        payload: loading,
    };
}