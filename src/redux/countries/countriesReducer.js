import { START_FETCH_COUNTRIES, SET_COUNTRIES } from './countriesTypes'

const initialState = {
    isFetching: false,
    countries: null,
}

const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCH_COUNTRIES:
            return {
                ...state,
                isFetching: true,
            }
        case SET_COUNTRIES:
            return {
                ...state,
                isFetching: false,
                countries: action.payload,
            }
        default:
            return state
    }
}

export default countriesReducer
