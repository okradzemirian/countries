import React from 'react'
import './Header.scss'

const Header = () => {
    return (
        <header className='header'>
            <div className='wrapper header__wrapper'>
                <h2 className='header__title'>Where In The World?</h2>
                <button className='header__button'>Dark Mode</button>
            </div>
        </header>
    )
}

export default Header
