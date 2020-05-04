import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import './App.scss'

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Switch>
                    <Route exact path='/' component={Homepage} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App
