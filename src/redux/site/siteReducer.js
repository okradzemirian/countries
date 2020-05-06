import { TOGGLE_DARK_MODE } from './siteTypes'

const initialState = {
    darkMode: false,
}

const siteReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_DARK_MODE:
            return {
                ...state,
                darkMode: !state.darkMode,
            }
        default:
            return state
    }
}

export default siteReducer
