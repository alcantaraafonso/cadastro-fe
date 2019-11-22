import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'

import promise from 'redux-promise'; //Usado para garantir a promessa de uma chamada assíncrona
import thunk from 'redux-thunk'; //Usado para sequenciar as chamadas das actions
import multi from 'redux-multi'; //Usado para chamar outra action a partir de uma em execução

import App from './main/App';
import * as serviceWorker from './serviceWorker';

import rootReducer from './main/RootReducer'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

/**
 * Aplicando o middleware para que e assim garantindo o retorno de operações baseadas em promessas
 */
const store = applyMiddleware(multi, promise, thunk)(createStore)(rootReducer, devTools);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
