import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Helmet } from 'react-helmet'

import { toggleDarkMode } from '../../redux/site/siteActions'
import { selectDarkMode } from '../../redux/site/siteSelectors'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = ({ darkMode, toggleDarkMode }) => (
    <React.Fragment>
        <Helmet>
            <body className={darkMode ? 'dark' : 'light'}></body>
        </Helmet>
        <header className='header'>
            <div className='wrapper header__wrapper'>
                <h2 className='header__title'>
                    <Link className='header__link' to='/'>
                        Where In The World?
                    </Link>
                </h2>
                <button
                    onClick={() => toggleDarkMode()}
                    className='header__button'
                >
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
        </header>
    </React.Fragment>
)

const mapStateToProps = createStructuredSelector({
    darkMode: selectDarkMode,
})

const mapDispatchToProps = dispatch => ({
    toggleDarkMode: () => dispatch(toggleDarkMode()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
