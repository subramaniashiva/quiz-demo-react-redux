const defaultState = [];

export const SET_CORRECT_ANSWERS = 'set_correct_answers';

export const LOAD_CORRECT_ANSWERS = 'load_correct_answers';

export function setCorrectAnswers(data) {
  return {
    type: SET_CORRECT_ANSWERS,
    payload: {
      data
    }
  }
}

export function loadCorrectAnswers(data) {
  return {
    type: LOAD_CORRECT_ANSWERS,
    payload: {
      data
    }
  }
}

export default function correctAnswers(state = defaultState, action) {
  switch(action.type) {
    case SET_CORRECT_ANSWERS:
      return action.payload.data;
    default:
      return state;
  }
}
