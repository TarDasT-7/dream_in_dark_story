import React from 'react';
import './App.css';


import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { connect } from 'react-redux';
import { setCurrentUser, SetStateAction } from './redux/user/user.actions';


class App extends React.Component{

  constructor(){
    super();

    this.state={
      currentUser:null
    }

  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch =>({

//   SetStateAction : user => dispatch(setCurrentUser(user)) 

// });


// export default connect(null , mapDispatchToProps)(App);
export default App;
