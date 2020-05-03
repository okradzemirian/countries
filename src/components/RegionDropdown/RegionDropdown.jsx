import React from 'react'
import { connect } from 'react-redux'
import { setRegion } from '../../redux/filters/filtersActions'
import './RegionDropdown.scss'

const RegionDropdown = ({ region, setRegion }) => {
    const handleSelect = e => {
        setRegion(e.target.value)
    }

    return (
        <select onChange={handleSelect} value={region} className='dropdown'>
            <option value=''>Region</option>
            <option value='africa'>Africa</option>
            <option value='america'>America</option>
            <option value='asia'>Asia</option>
            <option value='europe'>Europe</option>
            <option value='oceania'>Oceania</option>
        </select>
    )
}

const mapStateToProps = state => ({
    region: state.filters.region,
})

const mapDispatchToProps = dispatch => ({
    setRegion: region => dispatch(setRegion(region)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RegionDropdown)
