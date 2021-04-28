import ActionTypes from './ActionTypes'

export const deleteTransaction = id => ({
  type: ActionTypes.DELETE_TRANSACTION,
  payload: id
})

export const addTransaction = transaction => ({
  type: ActionTypes.ADD_TRANSACTION,
  payload: transaction
})

export const updateTransaction = transaction => ({
  type: ActionTypes.UPDATE_TRANSACTION,
  payload: transaction
})

export const editWallet = amount => ({
  type: ActionTypes.EDIT_WALLET,
  payload: amount
})

export const toggleFilter = category => ({
  type: ActionTypes.TOGGLE_FILTER,
  payload: category
})
