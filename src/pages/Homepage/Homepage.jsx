import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCountries } from '../../redux/countries/countriesSelectors'
import { fetchCountries } from '../../redux/countries/countriesActions'
import SearchBar from '../../components/SearchBar/SearchBar'
import RegionDropdown from '../../components/RegionDropdown/RegionDropdown'
import CountryList from '../../components/CountryList/CountryList'
import './Homepage.scss'

const Homepage = ({ countries, fetchCountries }) => {
    useEffect(() => {
        fetchCountries()
    }, [fetchCountries])

    return (
        <div className='wrapper homepage'>
            <SearchBar />
            <RegionDropdown />
            <CountryList countries={countries} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    countries: selectCountries,
})

const mapDispatchToProps = dispatch => ({
    fetchCountries: () => dispatch(fetchCountries()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
