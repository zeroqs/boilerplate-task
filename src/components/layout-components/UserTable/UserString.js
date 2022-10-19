import React from 'react';
import styles from "./UserTable.module.css";
import {Link} from "react-router-dom";
import {APP_PREFIX_PATH} from "../../../configs/AppConfig";

const UserString = ({props}) => {

    return (
        <Link to={{
            pathname:`${APP_PREFIX_PATH}/profile`,
            state: props,
        }} className={styles.tableRow}>
            <div className="col col-1" data-label="Job Id">{props.id}</div>
            <div className="col col-2" data-label="Customer Name">{props.name}</div>
            <div className="col col-3" data-label="Amount">{props.email}</div>
            <div className="col col-4" data-label="Payment Status">{props.address.city}</div>
            <div className="col col-4" data-label="Payment Status">{props.phone}</div>
        </Link >
    );
};

export default UserString;
