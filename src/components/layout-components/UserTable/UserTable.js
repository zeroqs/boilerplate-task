import React from 'react';
import styles from './UserTable.module.css';
import UserString from "./UserString";
import {useSelector} from "react-redux";

const UserTable = () => {
    const users = useSelector(state => state.fetch.users)
    const user =  users.map((item) => <UserString props={item}/>)

    return (
        <div className={styles.container}>
            <h2> Users </h2>
            <ul className={styles.responsiveTable}>
                <li className={styles.tableHeader}>
                    <div className="col col-1">Job Id</div>
                    <div className="col col-2">Name</div>
                    <div className="col col-3">Email</div>
                    <div className="col col-4">City</div>
                    <div className="col col-5">Phone</div>
                </li>
                {user}
            </ul>
        </div>
    );
};

export default UserTable;
