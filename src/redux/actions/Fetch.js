import {
    FETCH_USERS_FAILURE,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS} from "../constants/Fetch";




export function fetchUsersRequest() {
    return {
        type : FETCH_USERS_REQUEST,
    }
}

export function fetchUsersSuccess(users) {
    return {
        type : FETCH_USERS_SUCCESS,
        payload : users
    }
}

export function fetchUsersFailure(error) {
    return {
        type : FETCH_USERS_FAILURE,
        payload : error
    }
}

export function fetchUsers() {
    return {
        type : FETCH_USERS,
    }
}
