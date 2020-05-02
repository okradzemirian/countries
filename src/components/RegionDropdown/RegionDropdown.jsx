import React from 'react'
import './RegionDropdown.scss'

const RegionDropdown = () => {
    return (
        <select className='dropdown'>
            <option value=''>Region</option>
            <option value='africa'>Africa</option>
            <option value='america'>America</option>
            <option value='asia'>Asia</option>
            <option value='europe'>Europe</option>
            <option value='oceania'>Oceania</option>
        </select>
    )
}

export default RegionDropdown
