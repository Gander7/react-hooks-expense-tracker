import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import CurrencyInput from './CurrencyInput'

import styles from './AddTransaction.module.css'

const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    const [focusInput, setFocus] = useState(null)

    const { addTransaction, transactions } = useContext(GlobalContext)

    const onSubmit = e => {
       e.preventDefault() 

       const t = {
           id: transactions.length+1, 
           text,
           amount: +amount.replace('$','').replace(/[,]/g,'')
       }

       addTransaction(t)

       setText('')
       setAmount('')
       focusInput.focus()
    }

    return (
        <>
            <h3>Add New Transaction</h3>
            <form id="form" onSubmit={onSubmit} >
                <div className ="form-control">
                    <label>Text</label>
                    <input type="text" maxLength="40"
                        ref={ref => setFocus(ref)}
                        value={text} 
                        onChange={(e) => setText(e.target.value)} 
                        placeholder="Enter text..." 
                    />
                </div>
                <div className="form-control">
                    <label>Amount (positive = income)</label>
                    <CurrencyInput 
                        value={amount} 
                        onChange={(e) => setAmount(e.target.value)} 
                        placeholder="Enter amount..." 
                    />
                </div>
                <button className={styles.btn}>Add Transaction</button>
            </form>
        </>
    )
}

export default AddTransaction