import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App'
import './index.css'
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
const root = ReactDom.createRoot(document.getElementById('root'))
const store = createStore(reducer,applyMiddleware(thunk))
root.render(
    <Provider store={store}>
    <App/>
    </Provider>
)