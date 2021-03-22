import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../src/screens/Home/Home.jsx'
import Layout from '../src/components/Layout/Layout.jsx'
import Admin from "../src/screens/Admin/Admin.jsx";
import Cart from '../src/screens/Cart/Cart.jsx';
import Login from '../src/screens/Login/Login.jsx';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}  />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
