import { combineReducers } from 'redux'
import filtersReducer from './filters/filtersReducer'
import countriesReducer from './countries/countriesReducer'
import countryReducer from './country/countryReducer'

const rootReducer = combineReducers({
    filters: filtersReducer,
    countries: countriesReducer,
    country: countryReducer,
})

export default rootReducer
