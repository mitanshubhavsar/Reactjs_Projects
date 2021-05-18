import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import Payment from './components/Payment/Payment';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './ContextAPI/StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51IsY17SJTr3zddA3SDlmge7euFT3VWfKHBJw1mnhNU4L0NdXYlsRPTXvRpKnADahzz7RXAFJTmZ6IjTRd4TBHGFK00GlP2DCRE'
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will only runs when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log('Hii User is', authUser);
      if (authUser) {
        //the user just logged in/the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
        //the user is logged out
      }
    });
  }, []);
  return (
    //BEM convention
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
