import { createSelector } from 'reselect'

const filters = state => state.filters

export const selectSearchText = createSelector(
    [filters],
    filters => filters.searchText,
)
export const selectRegion = createSelector([filters], filters => filters.region)
