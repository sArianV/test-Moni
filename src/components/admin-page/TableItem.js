import React, { useState } from 'react'
import { Td, Tr } from '@chakra-ui/react'
import styles from './tableItem.module.css'
import {
    AiOutlineDelete,
    AiOutlineEdit
} from "react-icons/ai";

function TableItem({ loan }) {
    const [showOptions, setShowOptions] = useState(false)

    const {
        dni,
        email,
        genre,
        id,
        last,
        loanStatus,
        name
    } = loan

    const handleMouseEnter = () => {
        setShowOptions(true)
    }

    const handleMouseLeave = () => {
        setShowOptions(false)
    }

    return (
        <Tr
            className={styles.table_item}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Td>{name}</Td>
            <Td>{last}</Td>
            <Td>{genre}</Td>
            <Td>{dni}</Td>
            <Td>{email}</Td>
            <Td isNumeric>{loanStatus}</Td>
            <Td className={styles.table_item_options} >
                { showOptions &&
                    <div className={styles.options}>
                        <div 
                            className={`${styles.option_item} ${styles.option_edit}`} 
                        >
                            <AiOutlineEdit />
                        </div>
                        <div 
                            className={`${styles.option_item} ${styles.option_delete}`} 
                        >
                            <AiOutlineDelete />
                        </div>
                    </div>
                }
            </Td>
        </Tr>
    )
}

export default TableItem