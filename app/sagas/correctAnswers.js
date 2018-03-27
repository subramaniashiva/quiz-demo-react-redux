import { call, put } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import API from '../api';
import {setLoading} from '../redux/reducers/loading';
import {setCorrectAnswers} from '../redux/reducers/correctAnswers';
import {setCompleted} from '../redux/reducers/completed';
import {setScore, computeScore } from '../redux/reducers/score';
import {setCurrentQuestionIndex} from '../redux/reducers/currentQuestionIndex';
import staticAnswers from '../utils/staticAnswers';

function getAnswers() {
  return fetch(API.root + API.path.getQuestions)
    .then(() => staticAnswers);
}

export function* loadCorrectAnswers(action) {
  const userAnswers = action.payload.data;
  try {
    yield put(setLoading(true));
    const data = yield call(getAnswers);
    yield put(setCorrectAnswers(data));
    yield put(setCompleted(true));
    const score = computeScore(userAnswers, data);
    yield put(setScore(score));
    yield put(setCurrentQuestionIndex(0));
    yield put(setLoading(false));
   } catch (e) {
    yield put(setLoading(false));
   }
}
