import { store } from './store';
import React from 'react';
import { connect } from 'react-redux';
import { verifyCredentials } from './redux-token-auth-config'

verifyCredentials(store);

const NewHOC = (PassedComponent) => {
  
  const tom = class extends React.Component {

    render() {
      const {isSignedIn, isLoading, hasVerificationBeenAttempted } = this.props
      if ((isLoading && !isSignedIn) || !!hasVerificationBeenAttempted) {

        return (<h1> Loading </h1>)
      }
      return (
        <div>
          <PassedComponent {...this.props} />
        </div>
      )
    }
  }

  const mapStateToProps = (state) => ({
    isSignedIn: state.reduxTokenAuth.currentUser.isSignedIn,
    isLoading: state.reduxTokenAuth.currentUser.isLoading,
    hasVerificationBeenAttempted: state.reduxTokenAuth.currentUser.hasVerificationBeenAttempted,
    verifyCred: verifyCredentials
  })

  return connect(mapStateToProps)(tom);
}

export default NewHOC;