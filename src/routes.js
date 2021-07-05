import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Main } from './pages';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
      </Switch>
    </Router>
  );
}
