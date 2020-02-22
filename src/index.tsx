import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import * as React from 'react'
import ReactDOM from 'react-dom'

import Easy from './pages/easy'

import './styles.css'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Easy} />
      <Route exact path="/hard" component={Easy} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('app'),
)
