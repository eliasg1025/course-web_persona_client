import React, { useState, useEffect } from 'react';
import { getAccessTokenApi } from '../../../api/auth';
import { getUserActiveApi } from '../../../api/user';
import ListUsers from '../../../components/Admin/Users/ListUsers';

import './User.scss';

export default function User() {
    const [usersActive, setUsersActive] = useState([]);
    const [usersInactive, setUsersInactive] = useState([]);
    const token = getAccessTokenApi();

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
        <div className='users'>
            <ListUsers
                usersActive={usersActive}
                usersInactive={usersInactive}
            />
        </div>
    );
}
