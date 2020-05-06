import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
    return (
        <header className='header'>
            <div className='wrapper header__wrapper'>
                <h2 className='header__title'>
                    <Link className='header__link' to='/'>
                        Where In The World?
                    </Link>
                </h2>
                <button className='header__button'>Dark Mode</button>
            </div>
        </header>
    )
}

export default Header
