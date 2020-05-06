import React from 'react'
import { Link } from 'react-router-dom'
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

    return (
        <div className='country'>
            <div className='country__flag-wrapper'>
                <img
                    className='country__flag'
                    src={flag}
                    alt={`${name} flag`}
                />
            </div>
            <div className='country__content'>
                <h2 className='country__name'>{name}</h2>
                <div className='country__info-wrapper'>
                    <ul className='country__info-list'>
                        <li className='country__info'>
                            <span>Native Name:</span> {nativeName}
                        </li>
                        <li className='country__info'>
                            <span>Population:</span>
                            {population}
                        </li>
                        <li className='country__info'>
                            <span>Region:</span>
                            {region}
                        </li>
                        <li className='country__info'>
                            <span>Sub Region:</span> {subregion}
                        </li>
                        <li className='country__info'>
                            <span>Capital:</span>
                            {capital}
                        </li>
                    </ul>
                    <ul>
                        <li className='country__info'>
                            <span>Top Level Domain:</span>
                            <ul>
                                {topLevelDomain.map(domain => (
                                    <li key={domain}>{domain}</li>
                                ))}
                            </ul>
                        </li>
                        <li className='country__info'>
                            <span>Currency:</span>
                            <ul>
                                {currencies.map(({ code }) => (
                                    <li key={code}>{code}</li>
                                ))}
                            </ul>
                        </li>
                        <li className='country__info'>
                            <span>Languages:</span>
                            <ul>
                                {languages.map(({ name }) => (
                                    <li key={name}>{name}</li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className='borders'>
                    <h4 className='borders__title'>Borders:</h4>
                    <ul className='borders__list'>
                        {borders.map(alpha3Code => (
                            <li key={alpha3Code} className='borders__item'>
                                <Link
                                    className='borders__link'
                                    to={`/${alpha3Code}`}
                                >
                                    {alpha3Code}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Country
