import React from 'react'

const CountryItem = ({ flag, name, region, population, capital }) => (
    <div>
        <img src={flag} alt={`${name} flag`} />
        <h2>{name}</h2>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
    </div>
)

export default CountryItem
