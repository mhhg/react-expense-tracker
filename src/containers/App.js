import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddTransaction from './AddTransaction'
import Balance from './Balance'
import Home from './Home'
import UpdateTransaction from './UpdateTransaction'

function App() {
  return (
    <main className='main'>
      <div className='container-money'>
        <Balance />
      </div>
      <Router>
        <Switch>
          <Route path='/add' component={AddTransaction} />
          <Route path='/:id' component={UpdateTransaction} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </main>
  )
}

export default App
