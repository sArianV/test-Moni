import React from 'react'
import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import styles from './tableRequestedLoans.module.css'
import TableItem from './TableItem'

function TableRequestedLoans({ loans }) {
    return (
        <div className={styles.table}>
            { loans &&
                <TableContainer>
                <Table variant='simple'>
                    <TableCaption>List of Requested Loads</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Lastname</Th>
                            <Th>Genre</Th>
                            <Th>Dni</Th>
                            <Th>Email</Th>
                            <Th isNumeric>Loan Status</Th>
                            <Th> </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            Object.keys(loans).map(key => (                            
                                <TableItem
                                    key={key}
                                    loan={loans[key]}
                                    id={key}
                                />
                            ))
                        }
                    </Tbody>
                </Table>
            </TableContainer>
            }
        </div >
    )
}

export default TableRequestedLoans