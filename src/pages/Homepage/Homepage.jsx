import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from '../../components/SearchBar/SearchBar'
import CountryList from '../../components/CountryList/CountryList'
import './Homepage.scss'

const Homepage = () => {
    const [countries, setCountries] = useState(null)

    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all').then(res => {
            setCountries(res.data)
        })
    }, [])

    return (
        <div className='wrapper'>
            <SearchBar />
            <CountryList countries={countries} />
        </div>
    )
}

export default Homepage
