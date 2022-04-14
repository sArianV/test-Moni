import React from 'react'
import { links_navbar } from './links_navbar'
import LinkItem from './linkItem/LinkItem'
import styles from './navbar.module.css'

function Navbar() {
    return (
        <div className={styles.navbar}>
            {
                links_navbar.map((link) => {
                    return (
                        <LinkItem
                            href={link.href}
                            label={link.label}
                            key={link.label + link.href}
                        />
                    )
                })
            }
        </div>
    )
}

export default Navbar