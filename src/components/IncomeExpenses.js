import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

import styles from './IncomeExpenses.module.css'

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map(t => t.amount)

    const income = amounts
        .filter(a => a > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2)

    const expense = amounts
        .filter(a => a < 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2)

    return (
        <div className={styles.incomeExpense}>
            <div>
                <h4>Income</h4>
                <p className={`${styles.money} ${styles.plus}`}>{income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className={`${styles.money} ${styles.minus}`}>{expense}</p>
            </div>
        </div>
    )
}

export default IncomeExpenses