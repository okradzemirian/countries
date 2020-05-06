import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { fetchCountry } from '../../redux/country/countryActions'

import { selectCountry } from '../../redux/country/countrySelectors'
import Country from '../../components/Country/Country'
import './Countrypage.scss'

const Countrypage = ({ match, country, fetchCountry }) => {
    const { alpha3Code } = match.params

    useEffect(() => {
        fetchCountry(alpha3Code)
    }, [fetchCountry, alpha3Code])

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
    fetchCountry: alpha3Code => dispatch(fetchCountry(alpha3Code)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Countrypage)
