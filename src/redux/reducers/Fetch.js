import {
    FETCH_USERS_FAILURE,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS}
    from "../constants/Fetch";


const initState = {
    loading: false,
    users: [],
    error: '',
}

function fetchReducer(state= initState,action) {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_USERS_SUCCESS:
            return {
                users: action.payload,
                loading: false,
                error: '',
            }
        case FETCH_USERS_FAILURE:
            return {
                error: action.payload,
                loading: false,
                users: [],
            }
        default:
            return state
    }
}

export default fetchReducer