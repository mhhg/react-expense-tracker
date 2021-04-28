import React, { useState } from 'react'
import { VscCheck, VscClose, VscEdit } from 'react-icons/vsc'
import { connect } from 'react-redux'
import { editWallet } from '../context/Actions'
import { currencyFormat } from '../Utils'

const Balance = ({ initialAmount, transactions, editWallet }) => {
  if (!initialAmount || isNaN(initialAmount)) initialAmount = 0

  const amounts = transactions.map(transaction => transaction.amount)
  const total =
    parseFloat(initialAmount) + amounts.reduce((acc, item) => (acc += item), 0)
  const [editing, setEditing] = useState(false)

  return (
    <div className='balance'>
      <h4>Wallet Balance</h4>
      <span>{new Date().toDateString()}</span>
      <h3>
        {currencyFormat(total)}
        {!editing && (
          <VscEdit className='edit-icon' onClick={_ => setEditing(true)} />
        )}
      </h3>
      <span>USD</span>
      <h4>Initial amount:</h4>
      {editing ? (
        <>
          <input
            type='number'
            value={initialAmount}
            onChange={e => {
              editWallet(e.target.value)
            }}
            onKeyDown={e => {
              if (e.key === 'Enter') setEditing(false)
            }}
            min={0}
            placeholder='Enter wallet initial amount'
          />
          <VscCheck
            className='save-icon'
            onClick={_ => {
              setEditing(false)
            }}
          />
          <VscClose
            className='balance-icon'
            onClick={_ => {
              editWallet(editing)
              setEditing(false)
            }}
          />
        </>
      ) : (
        <span>+{currencyFormat(initialAmount)}</span>
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  transactions: state.transaction.list,
  initialAmount: state.transaction.initialAmount
})

const mapDispatchToProps = {
  editWallet
}
export default connect(mapStateToProps, mapDispatchToProps)(Balance)
