const defaultState = 0;

export const SET_CURRENT_QUESTION_INDEX = 'set_current_question_index';

export function setCurrentQuestionIndex(data) {
  return {
    type: SET_CURRENT_QUESTION_INDEX,
    payload: {
      data
    }
  }
}

export default function currentSourceIndex(state = defaultState, action) {
  switch(action.type) {
    case SET_CURRENT_QUESTION_INDEX:
      return action.payload.data;
    default:
      return state;
  }
}
