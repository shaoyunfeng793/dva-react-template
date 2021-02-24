import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Home from './routes/Home/Home';
import About from './routes/About/About';
import Counter from './routes/Counter/Counter';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/counter" exact component={Counter} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
