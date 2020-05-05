import axios from 'axios'
import { START_FETCH_COUNTRY, SET_COUNTRY } from './countryTypes'

const setCountry = country => ({
    type: SET_COUNTRY,
    payload: country,
})

const startFetchCountry = () => ({
    type: START_FETCH_COUNTRY,
})

export const fetchCountry = countryName => {
    return async dispatch => {
        dispatch(startFetchCountry())

        const res = await axios.get(
            `https://restcountries.eu/rest/v2/name/${countryName}/?fullText=true`,
        )

        dispatch(setCountry(res.data[0]))
    }
}
