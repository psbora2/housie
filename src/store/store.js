import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import injectClient from './injectClient';

const BaseUrl = "http://agile-fortress-30131.herokuapp.com/graphql"
const loggerMiddleware = createLogger();

export const store = createStore(
    rootReducer,
    applyMiddleware(
      injectClient(fetch, BaseUrl),
      thunkMiddleware,
      loggerMiddleware
    )
);