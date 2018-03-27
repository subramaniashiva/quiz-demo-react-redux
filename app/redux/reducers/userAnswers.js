const defaultState = [];

export const SET_USER_ANSWER = 'set_user_answer';

export function setUserAnswer(data) {
  return {
    type: SET_USER_ANSWER,
    payload: {
      data
    }
  }
}

export default function userAnswers(state = defaultState, action) {
  let foundAlready = false;
  let newState, answered;
  switch(action.type) {
    case SET_USER_ANSWER:
      answered = state.map((item) => {
        if (item.id === action.payload.data.id) {
          item.answers = action.payload.data.answers;
          foundAlready = true;
        }
        return item;
      });
      if (foundAlready) {
        // Better than manualy iterating and doing a Object.assign
        newState = JSON.parse(JSON.stringify(answered));
      } else {
        newState = JSON.parse(JSON.stringify(state));
        newState.push(action.payload.data);
      }
      return newState;
    default:
      return state;
  }
}
