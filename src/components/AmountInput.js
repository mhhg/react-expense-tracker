import React from 'react'

const AmountInput = ({ amount, setAmount }) => (
  <div className='form-control'>
    <label htmlFor='amount'>
      Amount <br />
      <span className='tip'>(negative - expense, positive - income)</span>
    </label>
    <input
      type='number'
      value={amount}
      onChange={e => setAmount(e.target.value)}
      placeholder='Enter amount'
    />
  </div>
)

export default AmountInput
