import React from 'react'
import logo from './logo.svg'
import './App.css'
import About from './About'
import Home from './Home'

import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact></Route>
      <Route path="/about" component={About}></Route>
      <Route></Route>
    </Switch>
  )
}

export default App
