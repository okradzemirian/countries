import React from 'react'
import CountryItem from '../CountryItem/CountryItem'
import './CountryList.scss'

const CountryList = ({ countries }) => (
    <div className='country-list'>
        {countries.map(({ alpha3Code, ...country }) => (
            <CountryItem key={alpha3Code} {...country} />
        ))}
    </div>
)

export default CountryList
