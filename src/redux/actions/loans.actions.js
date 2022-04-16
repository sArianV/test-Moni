import {
    REQUEST_LOAN,
    SET_LOADING,
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

export const set_loading = (loading) => {
    return {
        type: SET_LOADING,
        payload: loading,
    };
}