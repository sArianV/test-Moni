import React, { useEffect, useRef, useState } from "react"
import { 
    AlertDialog, 
    AlertDialogBody, 
    AlertDialogContent, 
    AlertDialogFooter, 
    AlertDialogHeader, 
    AlertDialogOverlay, 
    Button, 
} from "@chakra-ui/react"
import { delete_loan } from "../../redux/actions/loans.actions";
import { useDispatch } from "react-redux";

function DialogDelete({ id, isOpen, setIsOpen }) {
    const cancelRef = useRef()
    const dispatch = useDispatch();

    const onClose = () => {
        setIsOpen(false);
    }

    const onDelete = async() => {
        const response = await delete_loan(id);
        dispatch(response);
    }

    return (
        <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
        >
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                        Delete Loan Request
                    </AlertDialogHeader>

                    <AlertDialogBody>
                        Are you sure? You can't undo this action afterwards.
                    </AlertDialogBody>

                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='red' onClick={onDelete} ml={3}>
                            Delete
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    )
}

export default DialogDelete