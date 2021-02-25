import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../src/screens/Home/Home'
import Layout from '../src/components/Layout/Layout'
import Admin from "../src/screens/Admin/Admin";
function App() {
  return (

   
      <Switch>
         <Layout>
        <Route path="/" component={Home} />
        <Route path="/admin" component={Admin} />
        </Layout>
      </Switch>

  );
}

export default App;
