import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter} from 'react-router-dom';

// on passing redux store to Provider, we give redux store context to rest of the application
import {Provider} from 'react-redux'

// bring the actual persistor to inject in application
// which will give it context of our new persisted reducer
import {PersistGate} from 'redux-persist/integration/react'

import {store,persistor} from './redux/store'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate loading={null} persistor = {persistor}>
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>, document.getElementById('root')
);
