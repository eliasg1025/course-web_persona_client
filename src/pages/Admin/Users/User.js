import React, { useState, useEffect } from 'react';
import { getAccessTokenApi } from '../../../api/auth';
import { getUserApi } from '../../../api/user';

import './User.scss';

export default function User() {
    const [users, setUsers] = useState([]);
    const token = getAccessTokenApi();

    console.log(users);

    useEffect(() => {
        getUserApi(token).then(response => {
            setUsers(response);
        });
    }, [token]);

    return (
        <div>
            <h1>Lista de usuarios</h1>
        </div>
    );
}
