import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.scss'

function App() {
    const [countries, setCountries] = useState(null)

    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all').then(res => {
            setCountries(res.data)
        })
    })

    return <div className='App'></div>
}

export default App
