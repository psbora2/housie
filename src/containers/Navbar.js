import React from 'react';
import { connect } from 'react-redux'
import SiteHeader from './SignOut.js';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
	render(){
		const currentUser  = this.props
		const isSignedIn = currentUser.isSignedIn

		return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div className="container">
          <Link className="navbar-brand" to="">Housie Game</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home
                </Link>
              </li>
              {(isSignedIn) &&
                <li className="nav-item">
                  <Link className="nav-link" to="/games">Games</Link>
                </li>
              }
              {(isSignedIn) &&
                <SiteHeader name = {currentUser.name}/>
              }

              {(!isSignedIn) &&
                <li className="nav-item">
                  <Link className="nav-link" to="/register">SignUp</Link>
                </li>
              }

              {(!isSignedIn) &&
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login </Link>
                </li>
              }
              }
            </ul>
          </div>
        </div>
      </nav>
		)
	}
}
function mapStateToProps(state) {
  return (state.reduxTokenAuth.currentUser)
}

export default connect(mapStateToProps)(NavBar);
