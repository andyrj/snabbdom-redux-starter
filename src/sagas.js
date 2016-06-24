'use strict';
import {takeEvery} from 'redux-saga';
import {call, put} from 'redux-saga/effects';

function *test(action) {
  try {
    if (action.type === 'TEST') {
      const doAsyncResult = yield call();
      yield put({type: 'TEST_SUCCEEDED', result: doAsyncResult});
    }
  } catch (err) {
    yield put({type: 'TEST_FAILED', message: err.message});
  }
}

function *rootSaga() {
  yield* takeEvery('TEST', test);
}

module.exports = {
  rootSaga
};
