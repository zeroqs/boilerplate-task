import { all } from 'redux-saga/effects';
import Auth from './Auth';
import Fetch from './Fetch';

export default function* rootSaga(getState) {
  yield all([
    Auth(),
    Fetch()
  ]);
}
