import { combineReducers, createStore } from 'redux'
import Reducers from './Reducers'

export const reducers = combineReducers({ transaction: Reducers })

export function configureStore() {
  const persistedStore = localStorage.getItem('state')
    ? JSON.parse(localStorage.getItem('state'))
    : []
  const store = createStore(reducers, persistedStore)
  return store
}

export const store = configureStore()
store.subscribe(() =>
  localStorage.setItem('state', JSON.stringify(store.getState()))
)
