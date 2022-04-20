import React, { useState } from 'react'
import styles from './requestLoanForm.module.css'
import {
    Button,
    Input,
    Select,
    Spinner,
    Text
} from '@chakra-ui/react';
import { request_loan } from "../../redux/actions/loans.actions";

function RequestLoanForm() {
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
        await request_loan(state)
        setLoading(false)
    }

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
                    test api
                </Button>
            }
        </div>
    )
}

export default RequestLoanForm