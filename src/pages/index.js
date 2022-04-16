import React, { useEffect } from 'react'
import { Button } from '@chakra-ui/react';
import { useSelector, useDispatch } from "react-redux";
import { set_loading, request_loan } from "../redux/actions/loans.actions";

function index() {
  const loading = useSelector((state) => state.loans.loading);
  const dispatch = useDispatch();

  const handleClick = async() => {
    await request_loan()
  }
  
  
  return (
    <div> pantalla verificar mi solicitud {loading? "true": "false"}
      <Button
        onClick={handleClick}
      >
        test api
      </Button>
    </div>
  )
}

export default index