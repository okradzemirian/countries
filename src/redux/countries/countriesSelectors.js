import { createSelector } from 'reselect'

const countries = state => state.countries
const filters = state => state.filters

export const selectCountries = createSelector(
    [countries, filters],
    ({ countries }, { searchText, region }) => {
        if (countries) {
            return countries.filter(
                country =>
                    country.name
                        .toLowerCase()
                        .includes(searchText.toLowerCase()) &&
                    country.region.toLowerCase().includes(region),
            )
        }
        return null
    },
)
