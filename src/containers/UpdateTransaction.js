import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { updateTransaction } from '../context/Actions'
import { AmountInput, DateInput, NoteInput } from '../components'

const UpdateTransaction = ({ match, transactions, updateTransaction }) => {
  const history = useHistory()
  const [note, setNote] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const id = match.params.id
    const transaction = transactions.find(item => item.id === id)
    if (!transaction) history.push('/')

    setNote(transaction.note)
    setAmount(transaction.amount)
    setDate(new Date(transaction.date))
  }, [history, match.params.id, transactions])

  const onSubmitHandler = e => {
    e.preventDefault()
    if (!amount || !note) return

    updateTransaction({
      id: match.params.id,
      note,
      amount: +amount,
      date: date.getTime()
    })
    history.push('/')
  }

  if (!match.params.id) return null

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
  transactions: state.transaction.list
})

const mapDispatchToProps = {
  updateTransaction
}
export default connect(mapStateToProps, mapDispatchToProps)(UpdateTransaction)
