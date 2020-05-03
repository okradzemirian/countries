import { combineReducers } from 'redux'
import filtersReducer from './filters/filtersReducer'
import countriesReducer from './countries/countriesReducer'

const rootReducer = combineReducers({
    filters: filtersReducer,
    countries: countriesReducer,
})

export default rootReducer
