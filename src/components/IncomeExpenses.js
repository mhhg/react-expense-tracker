import React from 'react'
import { connect } from 'react-redux'
import { toggleFilter } from '../context/Actions'
import { currencyFormat } from '../Utils'

const IncomeExpenses = ({
  toggleFilter,
  transactions,
  viewIncome,
  viewExpense
}) => {
  const amounts = transactions.map(transaction => transaction.amount)

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)

  const expense =
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1

  return (
    <div className='inc-exp-container'>
      <div
        onClick={_ => toggleFilter('income')}
        className={viewIncome ? 'selected' : 'unselected'}
      >
        <h4>Income</h4>
        <p className='money plus'>+{currencyFormat(income)}</p>
      </div>
      <div
        onClick={_ => toggleFilter('expense')}
        className={viewExpense ? 'selected' : 'unselected'}
      >
        <h4>Expense</h4>
        <p className='money minus'>-{currencyFormat(expense)}</p>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  transactions: state.transaction.list,
  viewIncome: state.transaction.income,
  viewExpense: state.transaction.expense
})
const mapDispatchToProps = {
  toggleFilter
}
export default connect(mapStateToProps, mapDispatchToProps)(IncomeExpenses)
