import React, {useEffect, useState} from 'react';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import {auth} from "./firebase";
import {useStateValue} from './StateProvider';
import Payment from './Payment';
import AddressForm from './AddressForm'
import OrderFinished from './OrderFinished';



function App() {
  const [address, setAddress] = useState({});
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      if(authUser){
        //the user logged in or the user was logged in 
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else{
        //the user logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])
  const nextStep = () =>(
    <>
<h1>done</h1>
    </>
  )
  return (
    <Router>
      <div className="App">
      
        <Switch>
        <Route exact path="/checkout">
        <Header/>
            <Checkout/>
            <Footer/>
          </Route>
          <Route exact path="/">
          <Header/>
            <Home/>
            <Footer/>
          </Route>
          <Route exact path="/address">
          <Header/>
            <AddressForm setAddress={setAddress}/>
            <Footer/>
          </Route>
          <Route exact path="/payment">
          <Header/>
            <Payment address={address} nextStep={nextStep}/>
            <Footer/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/complete">
            <OrderFinished/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
