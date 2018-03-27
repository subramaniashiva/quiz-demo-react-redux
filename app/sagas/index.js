import { takeEvery, all } from 'redux-saga/effects';

/* ------------- Types ------------- */

import { LOAD_QUESTIONS } from '../redux/reducers/questions';
import { LOAD_CORRECT_ANSWERS } from '../redux/reducers/correctAnswers';

/* ------------- Sagas ------------- */

import { loadQuestions } from './questions';
import { loadCorrectAnswers } from './correctAnswers';

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeEvery(LOAD_QUESTIONS, loadQuestions),
    takeEvery(LOAD_CORRECT_ANSWERS, loadCorrectAnswers)

  ])
}
