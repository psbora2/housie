import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginPage } from './components';
import { history } from './store';
import  { HomePage, GameList, NavBar, Register } from './containers';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { verifyCredentials } from './redux-token-auth-config'
import { store } from './store';
import 'bootstrap';

function App() {
  verifyCredentials(store);
  return (
    <div className="container-fluid">
      <Router history={history}>
        <div>
          <div>
            <NavBar/>
          </div>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={Register} />
          <Route path="/games/:gameId" component={HomePage} />
          <Route exact path="/games" component={GameList} />
        </div>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isSignedIn: state.reduxTokenAuth.currentUser.isSignedIn
})

const main_page = connect(mapStateToProps)(App)

export default main_page;