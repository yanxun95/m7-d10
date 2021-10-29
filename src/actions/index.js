export const GET_CITY_WEATHER_LOADING = "GET_CITY_WEATHER_LOADING"
export const GET_CITY_WEATHER_ERROR = "GET_CITY_WEATHER_ERROR"
export const GET_CITY_WEATHER = "GET_CITY_WEATHER"
export const ADD_CITY_TO_FAV = "ADD_CITY_TO_FAV"
export const DEL_CITY_TO_FAV = "DEL_CITY_TO_FAV"

export const getCityWeatherAction = (cityName) => {
    return async (dispatch) => {
        dispatch({
            type: GET_CITY_WEATHER_LOADING,
            payload: true,
        })
        try {
            let resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`)
            if (resp.ok) {
                let result = await resp.json()
                dispatch({
                    type: GET_CITY_WEATHER,
                    payload: result,
                })
                dispatch({
                    type: GET_CITY_WEATHER_ERROR,
                    payload: false,
                })
            } else {
                console.log("error")
                dispatch({
                    type: GET_CITY_WEATHER_ERROR,
                    payload: true,
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const addCityToFavAction = (cityName) => ({
    type: ADD_CITY_TO_FAV,
    payload: cityName,
})


export const removeCityFromFavorite = (index) => ({
    type: DEL_CITY_TO_FAV,
    payload: index,
})