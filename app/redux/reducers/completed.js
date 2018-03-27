const defaultState = false;

export const SET_COMPLETED = 'set_completed';

export function setCompleted(data) {
  return {
    type: SET_COMPLETED,
    payload: {
      data
    }
  }
}

export default function completed(state = defaultState, action) {
  switch(action.type) {
    case SET_COMPLETED:
      return action.payload.data;
    default:
      return state;
  }
}
