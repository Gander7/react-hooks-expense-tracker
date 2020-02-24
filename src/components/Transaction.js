import React from 'react'

const Transaction = ({transaction}) => {
    const sign = transaction.amount < 0 ? '-' : '+'
    const amount = `${sign}$${Math.abs(transaction.amount)}`

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{amount}</span>
            <button className="delete-btn">x</button>
        </li>
    )
}

export default Transaction