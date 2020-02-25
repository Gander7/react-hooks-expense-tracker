import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

import styles from './Balance.module.css'

export const Balance = () => {
    const { transactions, getCurrencyFormatter } = useContext(GlobalContext)
    const fmtr = getCurrencyFormatter()

    const balance = transactions.reduce((acc, t) => (acc += t.amount), 0).toFixed(2)
     return (
         <>
            <h1 className={styles.title}>Balance</h1>
            <h4 className={styles.text}>{fmtr.format(balance)}</h4>
         </>
     )
}

export default Balance