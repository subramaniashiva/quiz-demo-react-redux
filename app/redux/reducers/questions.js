const defaultState = [];

export const SET_QUESTIONS = 'set_questions';

export const LOAD_QUESTIONS = 'load_questions';

export function setQuestions(data) {
  return {
    type: SET_QUESTIONS,
    payload: {
      data
    }
  }
}

export function loadQuestions() {
  return {
    type: LOAD_QUESTIONS
  }
}

export default function questions(state = defaultState, action) {
  switch(action.type) {
    case SET_QUESTIONS:
      return [...action.payload.data];
    default:
      return state;
  }
}
