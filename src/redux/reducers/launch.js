import { GET_LAUNCHES_REQUEST, GET_LAUNCHES_SUCCESS, GET_LAUNCHES_ERROR} from "../actionTypes";
  
  const initialState = {
    launchesList: [],
    loading: false,
    error:false,
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_LAUNCHES_REQUEST: {
        return {
          ...state,
          loading: true,
          error:false
        };
      }
      case GET_LAUNCHES_SUCCESS: {
        return {
          ...state,
          loading: false,
          error:false,
          launchesList: action.payload,
        };
      }
      case GET_LAUNCHES_ERROR: {
        return {
          ...state,
          loading: false,
          error:true,
        };
      }
      default:
        return state;
    }
  }
  