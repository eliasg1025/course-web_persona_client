import React, { useState } from 'react';
import { Switch, List, Avatar, Button } from 'antd';
import {} from '@ant-design/icons';
import NoAvatar from '../../../../assets/img/png/no-avatar.png';

import './ListUsers.scss';

export default function ListUsers(props) {
    const { usersActive, usersInactive } = props;
    const [viewUsersActive, setViewUsersActive] = useState(true);

    console.log({ usersActive, usersInactive });

    return (
        <div className='list-users'>
            <div className='list-users__switch'>
                <Switch
                    defaultChecked
                    onChange={() => setViewUsersActive(!viewUsersActive)}
                />
                <span>
                    {viewUsersActive
                        ? 'Usuarios Activos'
                        : 'Usuarios Inactivos'}
                </span>

                {viewUsersActive ? <UsersActive /> : <UsersInactive />}
            </div>
        </div>
    );
}

function UsersActive() {
    return <h3>Lista de usuarios activos</h3>;
}

function UsersInactive() {
    return <h3>Lista de usuarios inactivos</h3>;
}
