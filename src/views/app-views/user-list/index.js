import React from 'react'
import Loading from "../../../components/shared-components/Loading";

import {useDispatch, useSelector} from "react-redux";
import UserTable from "../../../components/layout-components/UserTable/UserTable";
import {fetchUsers} from "../../../redux/actions/Fetch";


const UserList = () => {
    const dispatch = useDispatch()
    const isLoaded = useSelector(state => state.fetch.loading)
    React.useEffect(() => {
        dispatch(fetchUsers())
    },[])
    return (
        <div>
            <h1 className="font-medium text-gray-900">User list component works!</h1>
            {
                isLoaded ? <Loading/> : <UserTable/>
            }
        </div>
    )
}

export default UserList
