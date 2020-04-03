import React, { useState, useEffect } from 'react';
import { getAccessTokenApi } from '../../../api/auth';
import { getUserActiveApi } from '../../../api/user';

import './User.scss';

export default function User() {
    const [usersActive, setUsersActive] = useState([]);
    const [usersInactive, setUsersInactive] = useState([]);
    const token = getAccessTokenApi();

    console.log({ usersActive, usersInactive });

    useEffect(() => {
        getUserActiveApi(token, true).then(response => {
            setUsersActive(response);
        });
    }, [token]);

    useEffect(() => {
        getUserActiveApi(token, false).then(response => {
            setUsersInactive(response);
        });
    }, [token]);

    return (
        <div>
            <h1>Lista de usuarios</h1>
        </div>
    );
}
