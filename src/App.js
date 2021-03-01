import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../src/screens/Home/Home'
import Layout from '../src/components/Layout/Layout'
import Admin from "../src/screens/Admin/Admin";
function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
