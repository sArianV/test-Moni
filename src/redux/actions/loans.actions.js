import {
    REQUEST_LOAN,
    SET_LOADING,
    GET_LOANS
} from '../types/loans.types';

import axios from 'axios';

const options = {
    "headers": {
        "credential": process.env.NEXT_PUBLIC_CREDENTIAL
    }
}

export const request_loan = async (prestamo) => {
    try {
        const api_url = process.env.NEXT_PUBLIC_API_PRE_SCORE_URL

        const response = await axios.get(api_url + "30156149", options);

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