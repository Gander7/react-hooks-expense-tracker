import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
    const { transactions } = useContext(GlobalContext)
    const balance = transactions.reduce((acc, t) => (acc += t.amount), 0).toFixed(2)
     return (
         <>
            <h1>Balance</h1>
            <h4>{balance}</h4>
         </>
     )
}

export default Balance