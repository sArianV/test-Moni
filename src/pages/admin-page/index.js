import React from 'react'
import { Button } from '@chakra-ui/react';
import { useSelector, useDispatch } from "react-redux";
import { set_loading, get_loans } from "../../redux/actions/loans.actions";

function index() {
  const {loading, loans} = useSelector((state) => { return {loading:state.loans.loading, loans:state.loans.loans} });
  const dispatch = useDispatch();

  const fetch_loans = async() => {
    dispatch(set_loading(true));
    const fetched_loans = await get_loans();
    dispatch(set_loading(false));
    dispatch(fetched_loans);
  }

  return (
    <div> pantalla verificar mi solicitud {loading? "true": "false"}
      <Button
        onClick={fetch_loans}
      >
        test api
      </Button>
    </div>
  )
}

export default index