import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDarkMode } from './redux/site/siteSelectors'
import { Helmet } from 'react-helmet'

import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage'
import Countrypage from './pages/Countrypage/Countrypage'
import './App.scss'

function App({ darkMode }) {
    return (
        <BrowserRouter>
            <Helmet>
                <body className={darkMode ? 'dark' : 'light'}></body>
            </Helmet>
            <div className='App'>
                <Header />
                <Switch>
                    <Route exact path='/' component={Homepage} />
                    <Route path='/:alpha3Code' component={Countrypage} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

const mapStateToProps = createStructuredSelector({
    darkMode: selectDarkMode,
})

export default connect(mapStateToProps)(App)
