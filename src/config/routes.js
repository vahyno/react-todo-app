import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import TodosContainer from '../containers/TodosContainer';

export default (
  <Switch>
    <Route path='/todos' component={ TodosContainer }/>
    <Route exact path='/' component={ Home }/>
  </Switch>
)
