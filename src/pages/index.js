import React from 'react'
import styles from './index.module.css';
import RequestLoanForm from '../components/request-loan-form/RequestLoanForm';

function index() {  
  return (
    <div className={styles.content}>
      <div className={styles.table_container}>
        <RequestLoanForm />
      </div>
    </div>
  )
}

export default index