import React, { useState } from 'react'
import { Td, Tr } from '@chakra-ui/react'
import styles from './tableItem.module.css'
import {
    AiOutlineDelete,
    AiOutlineEdit
} from "react-icons/ai";
import DialogDelete from './DialogDelete';
import ModalEdit from './ModalEdit';

function TableItem({ id, loan }) {
    const [showOptions, setShowOptions] = useState(false)
    const [showDeleteDialog, setShowDeleteDialog] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)

    const {
        dni,
        email,
        genre,        
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

    const handleDelete = () => {
        setShowDeleteDialog(true)
    }

    const handleEdit = () => {
        setShowEditModal(true)
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
                            onClick={handleEdit}
                            className={`${styles.option_item} ${styles.option_edit}`} 
                        >
                            <AiOutlineEdit />
                        </div>
                        <div 
                            onClick={handleDelete}
                            className={`${styles.option_item} ${styles.option_delete}`} 
                        >
                            <AiOutlineDelete />
                        </div>
                    </div>
                }
                <DialogDelete 
                    isOpen={showDeleteDialog} 
                    setIsOpen={setShowDeleteDialog} 
                    id={id}
                />

                <ModalEdit 
                    isOpen={showEditModal}
                    setIsOpen={setShowEditModal}
                    loan={loan}
                    id={id}
                />
            </Td>
        </Tr>
    )
}

export default TableItem