const defaultState = 0;

export const SET_SCORE = 'set_score';

export function setScore(data) {
  return {
    type: SET_SCORE,
    payload: {
      data
    }
  }
}

export function computeScore(userAnswers, correctAnswers) {
  let score = 0;
  correctAnswers.map((correctAns) => {
    const answered = userAnswers.find((userAns) => userAns.id === correctAns.id);
    if (answered && answered.answers.length === correctAns.answers.length) {
      let answerMatchedCount = 0;
      answered.answers.map((item) => {
        const answerFound = correctAns.answers.find((correctItem) => correctItem === item);
        answerMatchedCount = answerFound && answerFound.length ?  answerMatchedCount + 1: answerMatchedCount;
      });
      score = (answerMatchedCount === answered.answers.length && answerMatchedCount === correctAns.answers.length)?
                score + 1 : score;
      
    }
  });
  return score;
}

export default function currentSource(state = defaultState, action) {
  switch(action.type) {
    case SET_SCORE:
      return action.payload.data;
    default:
      return state;
  }
}
