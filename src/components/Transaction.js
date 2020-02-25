import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

import styles from './Transaction.module.css'

const Transaction = ({transaction}) => {
    const { deleteTransaction } = useContext(GlobalContext)

    const sign = transaction.amount < 0 ? '-' : '+'
    const amount = `${sign}$${Math.abs(transaction.amount)}`
    const css = [transaction.amount < 0 ? styles.minus : styles.plus, styles.transaction].join(' ')

    return (
        <li className={css}>
            {transaction.text} <span>{amount}</span>
            <button className={styles.deleteBtn} onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li>
    )
}

export default Transaction