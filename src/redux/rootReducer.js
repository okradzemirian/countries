import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import filtersReducer from './filters/filtersReducer'
import countriesReducer from './countries/countriesReducer'
import countryReducer from './country/countryReducer'
import siteReducer from './site/siteReducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['site'],
}

const rootReducer = combineReducers({
    filters: filtersReducer,
    countries: countriesReducer,
    country: countryReducer,
    site: siteReducer,
})

export default persistReducer(persistConfig, rootReducer)
