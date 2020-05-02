import React, { useState } from 'react'
import './SearchBar.scss'

const SearchBar = () => {
    const [searchText, setSearchText] = useState('')

    const handleChange = e => {
        setSearchText(e.target.value)
    }

    return (
        <div className='search-bar'>
            <input
                onChange={handleChange}
                value={searchText}
                className='search-bar__input'
                type='search'
                placeholder='Search for a country...'
            />
        </div>
    )
}

export default SearchBar
