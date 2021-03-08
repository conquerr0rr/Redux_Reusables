import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../src/screens/Home/Home'
import Layout from '../src/components/Layout/Layout'
import Admin from "../src/screens/Admin/Admin";
import Cart from '../src/screens/Cart/Cart';
function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
