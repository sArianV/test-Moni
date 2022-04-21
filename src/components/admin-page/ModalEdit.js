import React, { useState } from "react"
import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    Text
} from "@chakra-ui/react";
import styles from "./modalEdit.module.css"
import { edit_loan } from "../../redux/actions/loans.actions";
import { useDispatch } from "react-redux";

function ModalEdit({ loan, isOpen, setIsOpen, id }) {
    const [state, setState] = useState(loan)

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const onClose = () => {
        setIsOpen(false);
    }

    const onSubmit = async () => {
        const response = await edit_loan({loan: state, loanId: id})
        dispatch(response)
        onClose()
    }
    return (
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Edit Loan Request</ModalHeader>
                <ModalCloseButton />

                <ModalBody
                    pb={6}
                >
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
                        <Text >Loan Status </Text>
                        <Select
                            mb='16px'
                            placeholder='Loan Status'
                            onChange={handleChange}
                            name='loanStatus'
                            size='md'
                            value={state?.loanStatus}
                        >
                            <option value='APPROVED'>APPROVED</option>
                            <option value='REJECTED'>REJECTED</option>
                        </Select>
                    </div>
                </ModalBody>

                <ModalFooter>
                    <Button 
                        colorScheme='blue' 
                        mr={3}
                        onClick={onSubmit}
                    >
                        Save Loan Request
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
export default ModalEdit