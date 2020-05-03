import { createSelector } from 'reselect'

const countries = state => state.countries

export const selectCountries = createSelector(
    [countries],
    countries => countries.countries,
)
