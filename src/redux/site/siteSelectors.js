import { createSelector } from 'reselect'

const site = state => state.site

export const selectDarkMode = createSelector([site], site => site.darkMode)
