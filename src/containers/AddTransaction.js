import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { AmountInput, DateInput, NoteInput } from '../components/'
import { addTransaction } from '../context/Actions'

const AddTransaction = ({ addTransaction }) => {
  const history = useHistory()

  const [note, setNote] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState(new Date())

  const onSubmitHandler = e => {
    e.preventDefault()
    if (!amount || !note) return

    const newTransaction = {
      id: uuidv4(),
      note,
      amount: +amount,
      date: date.getTime()
    }

    addTransaction(newTransaction)
    history.push('/')
  }

  return (
    <div className='container-form'>
      <form onSubmit={onSubmitHandler}>
        <AmountInput amount={amount} setAmount={setAmount} />
        <NoteInput note={note} setNote={setNote} />
        <DateInput date={date} setDate={setDate} />

        <button
          type='submit'
          disabled={!+amount || !note}
          className='btn btn-save'
        >
          Save
        </button>
        <button className='btn btn-cancel' onClick={_ => history.push('/')}>
          Cancel
        </button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  transactions: state.transactions
})

const mapDispatchToProps = {
  addTransaction
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTransaction)
