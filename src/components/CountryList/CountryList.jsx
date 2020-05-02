import React from 'react'
import CountryItem from '../CountryItem/CountryItem'
import './CountryList.scss'

const CountryList = ({ countries }) => (
    <div className='country-list'>
        {countries &&
            countries.map(({ numericCode, ...country }) => (
                <CountryItem key={numericCode} {...country} />
            ))}
    </div>
)

export default CountryList
