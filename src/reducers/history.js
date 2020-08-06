import { GET_HISTORY } from  "../actions/actionTypes";

const initialState = { city : [] }

const history = (state = initialState, action ) => {
  switch(action.type) {
    case GET_HISTORY:{
      return {
        ...state, city: [...state.city, action.payload]
      } 
    }

  default: return state
   
  }
}

export default history;