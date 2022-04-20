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

export const request_loan = async (loan) => {
    try {
        const loans_api_url = process.env.NEXT_PUBLIC_API_LOAN_URL
        const prescore_api_url = process.env.NEXT_PUBLIC_API_PRE_SCORE_URL
        const { dni } = loan

        const prescore_response = await axios.get(`${prescore_api_url + dni}`);
        
        const { status : loanStatus } = prescore_response?.data || null

        if (loanStatus == null) {
            return {
                type: REQUEST_LOAN,
                payload: "Something went wrong, please try again"
            }
        }

        const request_loan_response = await axios.post(`${loans_api_url}`, {
            ...loan,
            loanStatus
        });

        console.log(request_loan_response)

        return {
            type: REQUEST_LOAN,
            payload: request_loan_response.status !== 200 ? request_loan_response.statusText : "Your loan was successfully requested"
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