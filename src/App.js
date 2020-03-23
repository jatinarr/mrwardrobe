import React from 'react';
import Navbar from 'components/navbar/navbar.component'
import HomePage from 'components/homepage/homepage.component.jsx'
import ShopPage from 'components/shop/shop.component.jsx'
import './App.css';
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className='app'> 
        <div className='fixed-component'>
            <Navbar />
        </div>
        <div className="dynamic-component">
            <Route exact path='/' component={HomePage}></Route>
            <Route exact path='/shop' component={ShopPage}></Route>
        </div>
    </div>
  );
}

export default App;
