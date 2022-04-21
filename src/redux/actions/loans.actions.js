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

        const { status: loanStatus } = prescore_response?.data || null

        if (loanStatus == null) {
            return {
                type: REQUEST_LOAN,
                payload: {
                    message: "Something went wrong, please try again",
                    type: "error"
                }
            }
        }

        const request_loan_response = await axios.post(`${loans_api_url}`, {
            ...loan,
            loanStatus: loanStatus === "approve" ? "APPROVED" : "REJECTED"
        });

        return {
            type: REQUEST_LOAN,
            payload: request_loan_response.status !== 200 ?
                {
                    message: "Something went wrong, please try again",
                    type: "error"
                } 
                : 
                {
                    message:"Your loan was successfully requested",
                    type: "success"
                }
        };
    } catch (error) {
        return {
            type: REQUEST_LOAN,
            payload: {
                message: "Something went wrong, please try again",
                type: "error"
            }
        }
    }

}

export const clean_request_loan = () => {
    return {
        type: REQUEST_LOAN,
        payload: null
    }
}

export const get_loans = async () => {
    try {
        const api_url = process.env.NEXT_PUBLIC_API_LOAN_URL

        const response = await axios.get(`${api_url}.json`);

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

export const delete_loan = async (loanId) => {
    try {
        const api_url = process.env.NEXT_PUBLIC_API_LOAN_URL

        await axios.delete(`${api_url}/${loanId}.json`);
        
        const response = await axios.get(`${api_url}.json`);
        
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

export const edit_loan = async ({loan, loanId}) => {
    try {
        const loans_api_url = process.env.NEXT_PUBLIC_API_LOAN_URL

        await axios.put(`${loans_api_url}/${loanId}.json`, loan);

        const response = await axios.get(`${loans_api_url}.json`);
        
        return {
            type: GET_LOANS,
            payload: response?.data || {},
        };
    } catch (error) {
        return {
            type: REQUEST_LOAN,
            payload: {
                message: "Something went wrong, please try again",
                type: "error"
            }
        }
    }

}

export const set_loading = (loading) => {
    return {
        type: SET_LOADING,
        payload: loading,
    };
}