import IncomeExpenses from '../components/IncomeExpenses'
import React from 'react'
import TransactionList from './TransactionList'

const Home = () => {
  return (
    <>
      <IncomeExpenses />
      <TransactionList />
    </>
  )
}

export default Home
