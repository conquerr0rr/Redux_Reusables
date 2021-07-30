import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../src/screens/Home/Home.jsx'
import Layout from '../src/components/Layout/Layout.jsx'
import Admin from "../src/screens/Admin/Admin.jsx";
import Cart from '../src/screens/Cart/Cart.jsx';
import Login from '../src/screens/Login/Login.jsx';
import Register from '../src/screens/Register/Register.jsx';
import Loader from '../src/components/Loader/Loader.jsx';
import LivingRoom from '../src/screens/LivingRoom/LivingRoom.jsx';
import Kitchen from '../src/screens/Kitchen/Kitchen.jsx'
import Bedroom from '../src/screens/Bedroom/Bedroom.jsx'
import axios from 'axios';

function App() {
  // const FetchData = async () => {
  //   try {
  //     let data = await axios.get('https://jsonplaceholder.typicode.com/posts');
  //     setFakeData(data.data);
  //     console.log(data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // const [search, setsearch] = useState('');
  // const [FakeData, setFakeData] = useState([]);
  // useEffect(() => {
  //   FetchData();
  // }, []);
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/livingroom" component={LivingRoom} />
          <Route exact path="/bedroom" component={Bedroom} />
          <Route exact path="/kitchen" component={Kitchen} />
        </Switch>
      </Layout>
    </Router>

    // <div>
    //   <input type="text" onChange={event => setsearch(event.target.value)} />
    //   <p>{search}</p>
    //   <br />

    //   {FakeData.filter((item) => item).map((item => {
    //     return <p key={item.id}>{item.title}</p>
    //   }))
    //   }

    // </div>
  );
}

export default App;
