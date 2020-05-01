import React from 'react'
import CountryItem from '../CountryItem/CountryItem'
import './CountryList.scss'

const CountryList = ({ countries }) =>
    countries && countries.map(country => <CountryItem {...country} />)

export default CountryList
