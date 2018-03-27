/*
  Root reducer. Combines all the reducer
  This files gives the structure of the state tree of the application
*/
import { combineReducers } from 'redux';

import loading from './loading';
import completed from './completed';
import correctAnswers from './correctAnswers';
import currentQuestionIndex from './currentQuestionIndex';
import questions from './questions';
import userAnswers from './userAnswers';
import score from './score';

export default combineReducers({
  loading,
  completed,
  correctAnswers,
  currentQuestionIndex,
  questions,
  userAnswers,
  score
});
