import React from 'react'
import { groupByMonth } from '../Utils'
import Transaction from './Transaction'

const prepare = (transactions, viewIncome, viewExpense) => {
  return groupByMonth(
    transactions.sort((a, b) => b.date - a.date),
    viewIncome,
    viewExpense
  )
}

const Group = ({ transactions, viewIncome, viewExpense }) => (
  <>
    {Object.entries(prepare(transactions, viewIncome, viewExpense)).map(
      ([title, transactions]) => (
        <div key={title}>
          <h5>{title}</h5>
          {transactions.map(transaction => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </div>
      )
    )}
  </>
)

export default Group
