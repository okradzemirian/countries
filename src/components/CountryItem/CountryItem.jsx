import React from 'react'
import { Link } from 'react-router-dom'
import './CountryItem.scss'

const CountryItem = ({
    flag,
    name,
    region,
    population,
    capital,
    alpha3Code,
}) => (
    <Link to={`/${alpha3Code}`} className='country-item'>
        <img className='country-item__img' src={flag} alt={`${name} flag`} />

        <div className='country-item__content'>
            <h4 className='country-item__name'>{name}</h4>

            <p className='country-item__info'>
                Population: <span>{population}</span>
            </p>
            <p className='country-item__info'>
                Region: <span>{region}</span>
            </p>
            <p className='country-item__info'>
                Capital: <span>{capital}</span>
            </p>
        </div>
    </Link>
)

export default CountryItem
