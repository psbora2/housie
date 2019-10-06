import { combineReducers } from 'redux';
import { reduxTokenAuthReducer } from 'redux-token-auth'
import { authentication } from './AuthenticationReducer';
import { registration } from './RegistrationReducer';
import { users } from './UsersReducer';
import { alert } from './AlertReducer';
import { playerReducer } from './PlayerReducer';
import {gameReducer} from './GameReducer.js';
import { reducer as formReducer } from 'redux-form';
import { gameCrudReducer } from './GameCrudReducer'


const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  gameReducer,
  alert,
  gameCrudReducer,
  playerReducer,
  reduxTokenAuth: reduxTokenAuthReducer,
  form: formReducer
});

export default rootReducer;