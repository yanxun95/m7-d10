import { GET_CITY_WEATHER_ERROR, GET_CITY_WEATHER } from '../actions'
import { initialState } from '../store'


const searchCityReducer = (state = initialState.favorite, action) => {
    switch (action.type) {
        case GET_CITY_WEATHER:
            return {
                ...state,
                cityWeather: action.payload,
            }
        case GET_CITY_WEATHER_ERROR:
            return {
                ...state,
                isError: action.payload,
            }
        default:
            return state
    }
}

export default searchCityReducer