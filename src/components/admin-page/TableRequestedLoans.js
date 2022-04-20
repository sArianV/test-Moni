import React from 'react'
import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import styles from './tableRequestedLoans.module.css'
import TableItem from './TableItem'

function TableRequestedLoans({ loans }) {
    console.log(loans)
    return (
        <div className={styles.table}>
            { loans &&
                <TableContainer>
                <Table variant='simple'>
                    <TableCaption>Imperial to metric conversion factors</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Lastname</Th>
                            <Th>Genre</Th>
                            <Th>Dni</Th>
                            <Th>Email</Th>
                            <Th isNumeric>Loan Status</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            loans.map((loan, index) => (
                                <TableItem
                                    key={loan?.id}
                                    loan={loan}
                                />
                            ))
                        }
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>To convert</Th>
                            <Th>into</Th>
                            <Th isNumeric>multiply by</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
            }
        </div >
    )
}

export default TableRequestedLoans