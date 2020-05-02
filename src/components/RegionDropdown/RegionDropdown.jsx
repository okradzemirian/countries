import React, { useState } from 'react'
import './RegionDropdown.scss'

const RegionDropdown = () => {
    const [region, setRegion] = useState('')

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

export default RegionDropdown
