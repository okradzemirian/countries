import React from 'react'
import './SearchBar.scss'

const SearchBar = () => {
    return (
        <div className='search-bar'>
            <input
                className='search-bar__input'
                type='search'
                placeholder='Search for a country...'
            />
        </div>
    )
}

export default SearchBar
