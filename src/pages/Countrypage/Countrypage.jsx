import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { fetchCountry } from '../../redux/country/countryActions'

import { selectCountry } from '../../redux/country/countrySelectors'
import Country from '../../components/Country/Country'
import './Countrypage.scss'

const Countrypage = ({ match, country, fetchCountry }) => {
    const { countryName } = match.params

    useEffect(() => {
        fetchCountry(countryName)
    }, [fetchCountry, countryName])

    return (
        <div className='wrapper'>
            {country && <Country country={country} />}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    country: selectCountry,
})

const mapDispatchToProps = dispatch => ({
    fetchCountry: countryName => dispatch(fetchCountry(countryName)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Countrypage)
