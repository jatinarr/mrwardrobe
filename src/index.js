import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter} from 'react-router-dom';

// on passing redux store to Provider, we give redux store context to rest of the application
import {Provider} from 'react-redux'
import store from '../src/redux/store'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root')
);
