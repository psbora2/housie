// redux-token-auth-config.js
import { generateAuthActions } from 'redux-token-auth'

const authUrl = "http://agile-fortress-30131.herokuapp.com/auth"

const config = {
  authUrl,
  userAttributes: {
    name: 'name',
    email:'email'
  },
  userRegistrationAttributes: {
    email: 'email',
    password:'password',
    password_confirmation:'password_confirmation',
    name:'name'
  },
  storage: {flushGetRequests: false
  }
}

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
} = generateAuthActions(config)

export {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
}