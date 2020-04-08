import React, { useState, useEffect } from 'react';
import { getAccessTokenApi } from '../../../api/auth';
import { getUserActiveApi } from '../../../api/user';
import ListUsers from '../../../components/Admin/Users/ListUsers';

import './User.scss';

export default function User() {
    const [usersActive, setUsersActive] = useState([]);
    const [usersInactive, setUsersInactive] = useState([]);
    const [reloadUser, setReloadUser] = useState(false);
    const token = getAccessTokenApi();

    useEffect(() => {
        getUserActiveApi(token, true).then(response => {
            setUsersActive(response.users);
        });
        getUserActiveApi(token, false).then(response => {
            setUsersInactive(response.users);
        });
        setReloadUser(false);
    }, [token, reloadUser]);

    return (
        <div className='users'>
            <ListUsers
                usersActive={usersActive}
                usersInactive={usersInactive}
                setReloadUser={setReloadUser}
            />
        </div>
    );
}
