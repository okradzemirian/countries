import React, { useState, useEffect } from 'react'
import axios from 'axios'
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
            {countries &&
                countries.map(({ flag, name, region, population, capital }) => (
                    <div>
                        <img src={flag} alt={`${name} flag`} />
                        <h2>{name}</h2>
                        <p>Population: {population}</p>
                        <p>Region: {region}</p>
                        <p>Capital: {capital}</p>
                    </div>
                ))}
        </div>
    )
}

export default App
