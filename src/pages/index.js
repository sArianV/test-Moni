import { Button } from '@chakra-ui/react';
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { set_loading } from "../redux/actions/loans.actions";

function index() {
  const loading = useSelector((state) => state.loans.loading);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(set_loading(!loading));
  }
  console.log(loading);
  return (
    <div> pantalla verificar mi solicitud {loading? "true": "false"}
      <Button
        onClick={handleClick}
      >
        cambiar estado
      </Button>
    </div>
  )
}

export default index