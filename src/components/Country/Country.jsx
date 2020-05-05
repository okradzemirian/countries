import React from 'react'
import './Country.scss'

const Country = ({ country }) => {
    const {
        flag,
        name,
        population,
        region,
        subregion,
        capital,
        languages,
        currencies,
        topLevelDomain,
        nativeName,
        borders,
    } = country

    console.log(country)

    return (
        <div className='country'>
            <div className='country__image-wrapper'>
                <img src={flag} alt={`${name} flag`} />
            </div>
            <div>
                <h2>{name}</h2>
                <ul>
                    <li>Native Name: {nativeName}</li>
                    <li>Population: {population}</li>
                    <li>Region: {region}</li>
                    <li>Sub Region: {subregion}</li>
                    <li>Capital: {capital}</li>
                    <li>
                        Top Level Domain:
                        <ul>
                            {topLevelDomain.map(domain => (
                                <li key={domain}>{domain}</li>
                            ))}
                        </ul>
                    </li>
                    <li>
                        Currency:
                        <ul>
                            {currencies.map(({ code }) => (
                                <li key={code}>{code}</li>
                            ))}
                        </ul>
                    </li>
                    <li>
                        Languages:
                        <ul>
                            {languages.map(({ name }) => (
                                <li key={name}>{name}</li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>
            <div>
                <h4>Borders:</h4>
                <ul>
                    {borders.map(country => (
                        <li key={country}>{country}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Country
