import React, { useState, useEffect } from 'react'
import Country from '../../components/Country/Country'
import axios from 'axios'
import './Countrypage.scss'

const Countrypage = ({ match }) => {
    const [country, setCountry] = useState(null)

    const { countryName } = match.params

    useEffect(() => {
        axios
            .get(
                `https://restcountries.eu/rest/v2/name/${countryName}/?fullText=true`,
            )
            .then(res => {
                setCountry(res.data[0])
            })
            .catch(err => {
                console.log(err)
            })

        return () => {
            setCountry(null)
        }
    }, [countryName])

    return (
        <div className='wrapper'>
            {country && <Country country={country} />}
        </div>
    )
}

export default Countrypage
