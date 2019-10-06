import { userConstants } from '../constants';
import { alertActions } from './';
import { history } from '../store';
import { signInUser } from '../redux-token-auth-config.js'
 
export const userActions = {
    login
};
 
function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));
        dispatch(signInUser({email:username, password: password}))
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                    dispatch(alertActions.success('User Login'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
 
    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}