import { call, put } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import API from '../api';
import { setLoading } from '../redux/reducers/loading';
import { setQuestions } from '../redux/reducers/questions';
import staticQuestions from '../utils/staticQuestions';

function getQuestions() {
  return fetch(API.root + API.path.getQuestions)
    .then(() => staticQuestions);
}

export function* loadQuestions() {
  try {
    yield put(setLoading(true));
    const data = yield call(getQuestions);
    yield put(setQuestions(data));
    yield put(setLoading(false));
   } catch (e) {
    yield put(setLoading(false));
   }
}
