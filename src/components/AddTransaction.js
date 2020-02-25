import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

import styles from './AddTransaction.module.css'

const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const { addTransaction, transactions } = useContext(GlobalContext)

    const onSubmit = e => {
       e.preventDefault() 

       const t = {
           id: transactions.length+1, 
           text,
           amount: +amount
       }

       addTransaction(t)
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form id="form" onSubmit={onSubmit} >
                <div className ="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className={styles.btn}>Add Transaction</button>
            </form>
        </>
    )
}

export default AddTransaction