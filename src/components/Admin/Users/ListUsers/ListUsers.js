import React, { useEffect, useState } from 'react';
import { Switch, List, Avatar, Button, notification } from 'antd';
import {
    EditOutlined,
    StopOutlined,
    DeleteOutlined,
    CheckOutlined
} from '@ant-design/icons';
import NoAvatar from '../../../../assets/img/png/no-avatar.png';
import Modal from '../../../Modal';
import EditUserForm from '../EditUserForm';
import { getAvatarApi, activateUserApi } from '../../../../api/user';
import { getAccessTokenApi } from '../../../../api/auth';

import './ListUsers.scss';

export default function ListUsers(props) {
    const { usersActive, usersInactive, setReloadUser } = props;
    const [viewUsersActive, setViewUsersActive] = useState(true);
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalContent, setModalContent] = useState(null);

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
            </div>
            {viewUsersActive ? (
                <UsersActive
                    usersActive={usersActive}
                    setIsVisibleModal={setIsVisibleModal}
                    setModalTitle={setModalTitle}
                    setModalContent={setModalContent}
                    setReloadUser={setReloadUser}
                />
            ) : (
                <UsersInactive
                    usersInactive={usersInactive}
                    setReloadUser={setReloadUser}
                />
            )}

            <Modal
                title={modalTitle}
                isVisible={isVisibleModal}
                setIsVisible={setIsVisibleModal}
            >
                {modalContent}
            </Modal>
        </div>
    );
}

function UsersActive(props) {
    const {
        usersActive,
        setIsVisibleModal,
        setModalTitle,
        setModalContent,
        setReloadUser
    } = props;

    const editUser = user => {
        setIsVisibleModal(true);
        setModalTitle(
            `Editar ${user.name ? user.name : '...'} ${
                user.lastname ? user.lastname : '...'
            }`
        );
        setModalContent(
            <EditUserForm
                user={user}
                setIsVisibleModal={setIsVisibleModal}
                setReloadUser={setReloadUser}
            />
        );
    };

    return (
        <List
            className='users-active'
            itemLayout='horizontal'
            dataSource={usersActive}
            renderItem={user => (
                <UserActive
                    user={user}
                    editUser={editUser}
                    setReloadUser={setReloadUser}
                />
            )}
        />
    );
}

function UserActive(props) {
    const { user, editUser, setReloadUser } = props;
    const [avatar, setAvatar] = useState(null);

    useEffect(() => {
        if (user.avatar) {
            getAvatarApi(user.avatar).then(response => {
                setAvatar(response);
            });
        } else {
            setAvatar(null);
        }
    }, [user]);

    const desativateUser = () => {
        const accessToken = getAccessTokenApi();

        activateUserApi(accessToken, user._id, false)
            .then(response => {
                notification['success']({
                    message: response
                });
                setReloadUser(true);
            })
            .catch(err => {
                notification['error']({
                    message: err
                });
            });
    };

    return (
        <List.Item
            actions={[
                <Button type='primary' onClick={() => editUser(user)}>
                    <EditOutlined />
                </Button>,
                <Button type='danger' onClick={desativateUser}>
                    <StopOutlined />
                </Button>,
                <Button
                    type='danger'
                    onClick={() => console.log('Eliminar usuario')}
                >
                    <DeleteOutlined />
                </Button>
            ]}
        >
            <List.Item.Meta
                avatar={<Avatar src={avatar ? avatar : NoAvatar} />}
                title={`
                            ${user.name ? user.name : '...'}
                            ${user.lastname ? user.lastname : '...'}
                        `}
                description={user.email}
            />
        </List.Item>
    );
}

function UsersInactive(props) {
    const { usersInactive, setReloadUser } = props;
    return (
        <List
            className='users-active'
            itemLayout='horizontal'
            dataSource={usersInactive}
            renderItem={user => (
                <UserInactive user={user} setReloadUser={setReloadUser} />
            )}
        />
    );
}

function UserInactive(props) {
    const { user, setReloadUser } = props;
    const [avatar, setAvatar] = useState(null);

    useEffect(() => {
        if (user.avatar) {
            getAvatarApi(user.avatar).then(response => {
                setAvatar(response);
            });
        } else {
            setAvatar(null);
        }
    }, [user]);

    const activateUser = () => {
        const accessToken = getAccessTokenApi();

        activateUserApi(accessToken, user._id, true)
            .then(response => {
                notification['success']({
                    message: response
                });
                setReloadUser(true);
            })
            .catch(err => {
                notification['error']({
                    message: err
                });
            });
    };

    return (
        <List.Item
            actions={[
                <Button type='primary' onClick={activateUser}>
                    <CheckOutlined />
                </Button>,
                <Button
                    type='danger'
                    onClick={() => console.log('Eliminar usuario')}
                >
                    <DeleteOutlined />
                </Button>
            ]}
        >
            <List.Item.Meta
                avatar={<Avatar src={avatar ? avatar : NoAvatar} />}
                title={`
                            ${user.name ? user.name : '...'}
                            ${user.lastname ? user.lastname : '...'}
                        `}
                description={user.email}
            />
        </List.Item>
    );
}
