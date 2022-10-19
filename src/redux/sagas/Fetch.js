import {FETCH_USERS} from "../constants/Fetch";
import axios from "axios";
import {fetchUsersFailure, fetchUsersRequest, fetchUsersSuccess} from "../actions/Fetch";
import {  takeEvery, put,  call } from 'redux-saga/effects';

const fetchUsersApi  = async  () =>  await axios.get("https://jsonplaceholder.typicode.com/users").then(res => res.data).catch(err => err)


function* fetchUsers() {
    try {
        yield put(fetchUsersRequest())
        const users = yield call(fetchUsersApi)
        if (users) {
            yield put(fetchUsersSuccess(users))
        }
    }catch (error) {
        yield put(fetchUsersFailure(error))
    }
}

export default function* fetchUsersWatcher() {
    yield takeEvery(FETCH_USERS,fetchUsers)
}