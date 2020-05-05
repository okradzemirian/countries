import { createSelector } from 'reselect'

const country = state => state.country

export const selectCountry = createSelector(
    [country],
    country => country.country,
)
