import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from '@/modules/Main'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
  </Switch>
)

export default Routes
