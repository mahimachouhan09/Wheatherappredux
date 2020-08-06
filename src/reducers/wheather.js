import {
  FETCH_WHEATHER_REQUEST,
  FETCH_WHEATHER_SUCCESS,
  FETCH_WHEATHER_FAILURE,
  FETCH_HISTORY
} from '../actions/actionTypes'
  
const initialState = {
  loading: false,
  wheather: {},
  error: ''
}
  
const wheather = (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case 'FETCH_WHEATHER_REQUEST':
      return {
        ...state,
        loading: true
      }

    case 'FETCH_WHEATHER_SUCCESS':
      return {
        loading: false,
        wheather: action.payload,
        error: ''
      }

    case 'FETCH_WHEATHER_FAILURE':
      return {
        loading: false,
        wheather: {},
        error: action.payload
    }
  // case FETCH_HISTORY:
  // return state.map(item=>item.city===action.city ? { ...city, cities: city } : city)
  
    default: return state
    }
}
  
export default wheather;