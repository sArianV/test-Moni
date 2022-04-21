import React, { useEffect, useState } from 'react'
import styles from './requestLoanForm.module.css'
import {
    Button,
    Input,
    Select,
    Spinner,
    Text,
    useToast
} from '@chakra-ui/react';
import { request_loan, clean_request_loan } from "../../redux/actions/loans.actions";
import { useSelector, useDispatch } from "react-redux";

function RequestLoanForm() {
    const dispatch = useDispatch();
    const response_request_loan = useSelector((state) => state.loans.response_request_loan)

    const toast = useToast()

    const [state, setState] = useState({
        "dni": "",
        "email": "",
        "genre": "",
        "name": "",
        "last": ""
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async () => {
        setLoading(true)
        const response = await request_loan(state)
        dispatch(response)
        setLoading(false)
    }

    const handleToast = () => {
        toast({
            title: response_request_loan.message,
            status: response_request_loan.type === "success" ? "success" : "error",
            duration: 9000,
            isClosable: true,
            onCloseComplete: () => {
                dispatch(clean_request_loan())
            }
        })
    }

    useEffect(() => {
        if (response_request_loan) {
            handleToast()
        }
    }, [response_request_loan])

    return (
        <div className={styles.form_container}>

            <Text >Name </Text>
            <Input
                mb='16px'
                value={state?.name}
                onChange={handleChange}
                placeholder='Name'
                size='md'
                name='name'
            />

            <Text >Lastname </Text>
            <Input
                mb='16px'
                value={state?.last}
                onChange={handleChange}
                placeholder='Lastname'
                size='md'
                name='last'
            />

            <Text >DNI </Text>
            <Input
                mb='16px'
                value={state?.dni}
                onChange={handleChange}
                placeholder='DNI'
                size='md'
                name='dni'
            />

            <Text >Email </Text>
            <Input
                mb='16px'
                value={state?.email}
                onChange={handleChange}
                placeholder='Email'
                size='md'
                name='email'
            />
            <Text >Genre </Text>
            <Select
                mb='16px'
                placeholder='Select your genre'
                onChange={handleChange}
                name='genre'
                size='md'
                value={state?.genre}
            >
                <option value='Femenino'>Femenino</option>
                <option value='Masculino'>Masculino</option>
                <option value='Otro'>Otro</option>
            </Select>

            {loading ?
                <Spinner />
                :
                <Button
                    onClick={handleSubmit}
                >
                    Request Loan
                </Button>
            }
        </div>
    )
}

export default RequestLoanForm