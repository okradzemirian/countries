import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CountryList from './components/CountryList/CountryList'
import SearchBar from './components/SearchBar/SearchBar'
import './App.scss'

function App() {
    const [countries, setCountries] = useState(null)

    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all').then(res => {
            setCountries(res.data)
        })
    }, [])

    return (
        <div className='App'>
            <SearchBar />
            <CountryList countries={countries} />
        </div>
    )
}

export default App
