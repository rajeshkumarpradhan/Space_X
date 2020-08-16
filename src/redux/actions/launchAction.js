
import axios from "axios";
import { GET_LAUNCHES_REQUEST, GET_LAUNCHES_SUCCESS, GET_LAUNCHES_ERROR,
  } from "../actionTypes";

export function isLoading(value) {
    return {
      type: value
    };
}
export function isLoaded(value, data) {
    return {
      type: value,
      payload:data
    };
}
export function isError(value, error) {
    return {
      type: value,
      payload:error
    };
}
export function getLaunches() {
    return (dispatch) => {
      let userUrl = "https://api.spacexdata.com/v3/launches?limit=100";
        dispatch(isLoading(GET_LAUNCHES_REQUEST));
        axios
        .get(userUrl)
        .then((response) => {
            dispatch(isLoaded(GET_LAUNCHES_SUCCESS, response.data));
        })
        .catch((error) => {
            dispatch(isError(GET_LAUNCHES_ERROR, error));
        });
    };
   
}

export function getFilteredlaunches(filters) {
  let userUrl = "https://api.spacexdata.com/v3/launches?limit=100";
    if(filters.successfulLaunch  !== null) {
      userUrl = userUrl + "&launch_success=" + filters.successfulLaunch;
    }
    if(filters.successfulLanding  !== null) {
      userUrl = userUrl + "&land_success=" + filters.successfulLanding;
    }
    if(filters.year) {
      userUrl = userUrl + "&launch_year=" + filters.year;
    }
   
    return (dispatch) => {
        dispatch(isLoading(GET_LAUNCHES_REQUEST));
        axios
        .get(userUrl)
        .then((response) => {
            dispatch(isLoaded(GET_LAUNCHES_SUCCESS, response.data));
        })
        .catch((error) => {
            dispatch(isError(GET_LAUNCHES_ERROR, error));
        });
    };
   
}

