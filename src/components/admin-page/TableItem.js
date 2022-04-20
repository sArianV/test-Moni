import React from 'react'
import { Td, Tr } from '@chakra-ui/react'

function TableItem({ loan }) {
    const {
        dni,
        email,
        genre,
        id,
        last,
        loanStatus,
        name
    } = loan

    return (
        <Tr style={{
            cursor: 'pointer'
        }}>
            <Td>{name}</Td>
            <Td>{last}</Td>
            <Td> {genre}</Td>
            <Td>{dni}</Td>
            <Td>{email}</Td>
            <Td isNumeric>{loanStatus}</Td>
        </Tr>
    )
}

export default TableItem