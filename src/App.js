  
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './Pages/homepage/homepage.component';
import ShopPage from "./Pages/shop/shop.component";
import Header from "./Components/header/header.component"
import SignInAndSignOut from "./Pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignOut} />
      </Switch>
    </div>
  );
}

export default App;
