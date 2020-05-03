import { SET_REGION, SET_SEARCH_TEXT } from './filtersTypes'

const initialState = {
    searchText: '',
    region: '',
}

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REGION:
            return {
                ...state,
                region: action.payload,
            }
        case SET_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload,
            }
        default:
            return state
    }
}

export default filtersReducer
