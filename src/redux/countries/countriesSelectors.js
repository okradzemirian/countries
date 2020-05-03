import { createSelector } from 'reselect'

const countries = state => state.countries
const filters = state => state.filters

export const selectCountries = createSelector(
    [countries, filters],
    (countries, filters) => {
        if (countries.countries) {
            return countries.countries.filter(country =>
                country.name
                    .toLowerCase()
                    .includes(filters.searchText.toLowerCase()),
            )
        }
        return null
    },
)
