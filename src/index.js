import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '@material/react-text-field/dist/text-field.css';
import './assets/scss/index.scss';
import store from './store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Checkout from './views/Checkout';

ReactDOM.render(
    <Provider store={ store }>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={ Checkout } />
            </Switch>
        </BrowserRouter> 
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
