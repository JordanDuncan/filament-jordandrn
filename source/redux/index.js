/**
 * app/redux/{{name}}
 */

const initialState = {
  timestamp: 0
};

export const UPDATE_TIME = '{{name}}/UPDATE_TIME';

export function updateTime (): Action {
  // get a timestamp and pass it to the reducer
  return {
    type: UPDATE_TIME,
    timestamp: new Date().getTime()
  };
}

export function updateTimeAsync (delay: number = 2000): ThunkAction {
  return dispatch => {
    setTimeout(() => {
      dispatch(updateTime());
    }, delay);
  };
}

export default function {{name}}Reducer (state = initialState, action: Action): State {
  switch (action.type) {
  case UPDATE_TIME:
    return {
      ...state,
      timestamp: action.timestamp
    };

  default:
    return state;
  }
}
