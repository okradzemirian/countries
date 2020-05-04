import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import Countrypage from './pages/Countrypage/Countrypage'
import './App.scss'

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Switch>
                    <Route exact path='/' component={Homepage} />
                    <Route path='/:countryName' component={Countrypage} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App
