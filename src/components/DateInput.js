import React, { useEffect, useRef, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

function useOutsideAlerter(ref, setShowCalendar) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowCalendar(false)
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, setShowCalendar])
}

const DateInput = ({ date, setDate }) => {
  const [showCalendar, setShowCalendar] = useState(false)
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef, setShowCalendar)

  return (
    <div
      className='form-control'
      ref={wrapperRef}
      onKeyDown={e => {
        if (e.key === 'Escape' || e.key === 'Enter') setShowCalendar(false)
      }}
    >
      <label htmlFor='text'>Date</label>
      <input
        type='text'
        value={date ? new Date(date).toDateString() : ''}
        onChange={e => setDate(e.target.value)}
        placeholder='Enter date'
        onFocus={e => setShowCalendar(true)}
      />
      <Calendar
        className={`calendar ${showCalendar ? 'show' : 'hide'}`}
        onChange={e => {
          setShowCalendar(false)
          return setDate(e)
        }}
        value={date}
      />
    </div>
  )
}

export default DateInput
