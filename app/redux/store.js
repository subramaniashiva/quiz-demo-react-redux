/*
  Redux store file.
  Combines the root reducer, thunk middleware (for API requests)
*/
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/rootReducer';
import sagas from '../sagas/';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
export default createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);
