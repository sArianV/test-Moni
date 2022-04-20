import React, { useEffect } from 'react'
import { Button } from '@chakra-ui/react';
import { useSelector, useDispatch } from "react-redux";
import { set_loading, get_loans } from "../../redux/actions/loans.actions";
import styles from './index.module.css';
import TableRequestedLoans from '../../components/admin-page/TableRequestedLoans';

function index() {
  const loading = useSelector((state) => state.loans.loading);
  const loans = useSelector((state) => state.loans.loans);

  const dispatch = useDispatch();

  const fetch_loans = async () => {
    dispatch(set_loading(true));
    const fetched_loans = await get_loans();
    dispatch(set_loading(false));
    dispatch(fetched_loans);
  }

  useEffect(() => {
    fetch_loans()
  }, [])

  return (
    <div className={styles.content}>
      <div className={styles.table_container}>
        {loading ?
          <div>Loading...</div>
          :
          <TableRequestedLoans loans={loans} />
        }
      </div>
    </div>
  )
}

export default index