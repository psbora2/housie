import React from 'react'
import { connect } from 'react-redux'
import { signOutUser } from '../redux-token-auth-config' 
import { history } from '../store';

class SiteHeader extends React.Component {
  constructor (props) {
    super(props)
    this.signOut = this.signOut.bind(this);
  }

  signOut (e) {
    e.preventDefault()
    const { signOutUser} = this.props
    signOutUser()
      .then(history.push('/'))
      .catch(history.push('/'))
  }

  render () {
    const {name} = this.props
    return(
    <div className="dropdown">
      <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
        {name}
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#" onClick = {this.signOut}>Sign Out</a>
      </div>
    </div>
    )
  }
}
function mapStateToProps(state) {
  const name =  state.reduxTokenAuth.currentUser.attributes
  return (name)
}

export default connect(
  mapStateToProps,
  { signOutUser },
)(SiteHeader)