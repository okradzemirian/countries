import axios from 'axios'
import { START_FETCH_COUNTRIES, SET_COUNTRIES } from './countriesTypes'

const startFetchCountries = () => ({
    type: START_FETCH_COUNTRIES,
})

const setCountries = countries => ({
    type: SET_COUNTRIES,
    payload: countries,
})

export const fetchCountries = () => {
    return async (dispatch, getState) => {
        dispatch(startFetchCountries())
        const countries = getState().countries.countries

        if (!countries) {
            const res = await axios.get(
                'https://restcountries.eu/rest/v2/all?fields=flag;name;population;region;capital;alpha3Code',
            )

            dispatch(setCountries(res.data))
        }
    }
}
