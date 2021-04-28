import ActionTypes from './ActionTypes'

const initialState = {
  list: [],
  income: true,
  expense: true,
  initialAmount: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.DELETE_TRANSACTION:
      return {
        ...state,
        list: state.list.filter(
          transaction => transaction.id !== action.payload
        )
      }

    case ActionTypes.ADD_TRANSACTION:
      return {
        ...state,
        list: [action.payload, ...state.list]
      }

    case ActionTypes.UPDATE_TRANSACTION:
      state.list[state.list.findIndex(item => item.id === action.payload.id)] =
        action.payload
      return {
        ...state,
        list: [...state.list]
      }

    case ActionTypes.EDIT_WALLET:
      return {
        ...state,
        initialAmount: isNaN(action.payload) ? 0 : parseFloat(action.payload)
      }

    case ActionTypes.TOGGLE_FILTER:
      return { ...state, [action.payload]: !state[action.payload] }

    default:
      return state
  }
}
