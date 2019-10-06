import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import  App  from './App';
import { verifyCredentials } from './redux-token-auth-config' // <-- note this is YOUR file, not the redux-token-auth NPM module

verifyCredentials(store) // <-<-<-<-<- here's the important part <-<-<-<-<-

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);