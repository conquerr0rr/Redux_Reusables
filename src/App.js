import React from 'react';
import { Router, Route, Switch } from "react-router";
import Home from '../src/screens/Home/Home'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
