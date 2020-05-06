import { SET_REGION, SET_SEARCH_TEXT } from './filtersTypes'

export const setRegion = region => ({
    type: SET_REGION,
    payload: region,
})

export const setSearchText = text => ({
    type: SET_SEARCH_TEXT,
    payload: text,
})
