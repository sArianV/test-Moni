import React from 'react'
import styles from "./layout.module.css"
import Navbar from './navbar/Navbar'

function Layout({ children }) {
  return (
    <div className={styles.root} >
      <Navbar />

      <div className={styles.body} >
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout