import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../src/screens/Home/Home'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
