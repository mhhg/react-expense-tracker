import React from 'react'
import { VscClose } from 'react-icons/vsc'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { deleteTransaction } from '../context/Actions'
import { currencyFormat, pad } from '../Utils'

const Transaction = ({ transaction, deleteTransaction }) => {
  const history = useHistory()

  return (
    <div
      key={transaction.id}
      className={`transaction ${transaction.amount < 0 ? 'minus' : 'plus'}`}
    >
      <div
        className='transaction-wrapper'
        onClick={_ => history.push(`/${transaction.id}`)}
      >
        <div className='transaction-date'>
          {pad(new Date(transaction.date).getDate(), 2)}
        </div>
        {transaction.note}
        <span className='transaction-amount'>
          {currencyFormat(transaction.amount)}
        </span>
      </div>
      <VscClose
        className='delete-btn'
        onClick={() => deleteTransaction(transaction.id)}
      />
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  deleteTransaction
}

export default connect(mapStateToProps, mapDispatchToProps)(Transaction)
