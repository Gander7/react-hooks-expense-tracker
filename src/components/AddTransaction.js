import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = e => {
       e.preventDefault() 

       const t = {
           id: Math.floor(Math.random() * 1000000000),
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
                <button className="btn">Add Transaction</button>
            </form>
        </>
    )
}

export default AddTransaction