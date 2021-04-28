import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Group } from '../components'

const TransactionList = ({ transactions, viewIncome, viewExpense }) => {
  return (
    <>
      <div className='add-container'>
        <Link to='/add'>
          <button className='btn btn-add'>Add Transaction</button>
        </Link>
      </div>
      <div className='list'>
        {transactions.length ? (
          <Group
            transactions={transactions}
            viewIncome={viewIncome}
            viewExpense={viewExpense}
          />
        ) : (
          <h5 className='no-transactions'>No transactions.</h5>
        )}
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    transactions: state.transaction.list,
    viewIncome: state.transaction.income,
    viewExpense: state.transaction.expense
  }
}

export default connect(mapStateToProps)(TransactionList)
