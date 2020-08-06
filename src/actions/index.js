import {
  FETCH_WHEATHER_REQUEST,
  FETCH_WHEATHER_SUCCESS,
  FETCH_WHEATHER_FAILURE,
  GET_HISTORY,
  API_KEY
} from './actionTypes'
  
export const getWheather = (city) => {
  return (dispatch) => {
    dispatch(fetchWeatherRequest())
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      const city = data
      console.log(city)
      // console.log(city.main.temp);
      // console.log(city.wind);
      dispatch(fetchWeatherSuccess(city))
    })
    .catch(error => {
      dispatch(fetchWeatherFailure(error.message))
    })
  }
}
  
export const fetchWeatherRequest = () => {
  return {
    type: FETCH_WHEATHER_REQUEST
  }
}
  
export const fetchWeatherSuccess = city => {
  return {
    type: FETCH_WHEATHER_SUCCESS,
    payload: city
  }
}
  
export const fetchWeatherFailure = error => {
  return {
    type: FETCH_WHEATHER_FAILURE,
    payload: error
  }
}

export const getHistory = city => {
  return{
    type : GET_HISTORY,
    payload : city
  }
}