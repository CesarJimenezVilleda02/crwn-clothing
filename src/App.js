import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import mojs from "@mojs/core";

import './App.css';

import HomePage from './Pages/homepage/homepage.component';
import ShopPage from "./Pages/shop/shop.component";
import CheckoutPage from "./Pages/checkout/checkout.component";
import Header from "./Components/header/header.component"
import SignInAndSignOut from "./Pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";

import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions"
import SignInAndSignUp from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import {selectCurrentUser} from "./redux/user/user.selectors";

class App extends React.Component {

  unSubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({          
            id: snapShot.id,
            ...snapShot.data()
          
          })
        })
      }
      else {
        setCurrentUser(userAuth)
      }
    })

    const burst = new mojs.Burst({
      left: 0, top: 0,
      radius:   { 0: 50 },
      count:    10,
      children: {
        shape:      'polygon',
        points:     3,
        fill:       { 'rgb(40, 222, 33)' : 'rgb(29, 44, 219)' },
        angle:      { 360: 0 },
        duration:   1500,
        delay:      'stagger( rand(0, 200) )'
      }
    });
    
    document.addEventListener( 'click', function (e) {
      burst
        .tune({ x: e.pageX, y: e.pageY })
        .replay();
    } );

  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
      return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to="/"/>) : (<SignInAndSignUp/>)} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps )(App);
