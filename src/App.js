import React from 'react';
import {HomePage} from 'components/homepage/homepage.component.jsx'
import './App.css';
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className='app'> 
        <Route exact path='/' component={HomePage}></Route>
    </div>
  );
}

export default App;
