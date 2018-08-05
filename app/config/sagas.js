import { takeEvery, select, call, put } from 'redux-saga/effects';

import { SWAP_CURRENCY, CHANGE_BASE_CURRENCY, GET_INITIAL_CONVERSION, CONVERSION_RESULTS, CONVERSION_ERROR } from '../components/actions/currencies'

const getLastesRate = () => fetch("http://data.fixer.io/api/latest?access_key=a226c763f6d4452625d85eb88c744de3");

const fetchLatestConversionRates = function* (action) {

    try {
        let currency = yield select(state => state.currencies.baseCurrency);
        const response = yield call(getLastesRate /*, currency*/);
        const results = yield response.json();
        if(results.error){
            yield put({ type: CONVERSION_ERROR, error: results.error });
        }
        else{
            yield put({ type: CONVERSION_RESULTS, results: results });
            
        }
    } catch (e) {
        yield put({ type: CONVERSION_ERROR, error: e.message });
    }
};
export default function* rootSaga() {
    yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
     //yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
    // yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
}