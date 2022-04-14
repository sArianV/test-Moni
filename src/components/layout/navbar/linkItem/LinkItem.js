import React from 'react'
import Link from 'next/link'
import styles from './linkItem.module.css'

function LinkItem({ href, label }) {
    return (
        <Link href={href}>
            <div className={styles.linkItem}>
                {label}
            </div>
        </Link>
    )
}

export default LinkItem