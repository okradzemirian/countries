import { START_FETCH_COUNTRY, SET_COUNTRY } from './countryTypes'

const initialState = {
    isFetching: false,
    country: null,
}

const countryReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCH_COUNTRY:
            return {
                ...state,
                isFetching: true,
            }
        case SET_COUNTRY:
            return {
                ...state,
                isFetching: false,
                country: action.payload,
            }
        default:
            return state
    }
}

export default countryReducer
