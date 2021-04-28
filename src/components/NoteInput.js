import React from 'react'

const NoteInput = ({ note, setNote }) => (
  <div className='form-control'>
    <label htmlFor='text'>Note</label>
    <input
      type='text'
      value={note}
      onChange={e => setNote(e.target.value)}
      placeholder='Enter note'
    />
  </div>
)

export default NoteInput;