import React from 'react'
import './App.css'

import Main from './components/Main.component'

import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </div>
  )
}

export default App
