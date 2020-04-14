import React, { useState, useEffect } from 'react';
import { Switch, List, Button, Modal as ModalAntd, notification } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import DragSortableList from 'react-drag-sortable';

import Modal from '../../../Modal';
import AddMenuWebForm from '../AddMenuWebForm';
import EditMenuWebForm from '../EditMenuWebForm';

import { getAccessTokenApi } from '../../../../api/auth';
import { updateMenuApi, activateMenuApi } from '../../../../api/menu';

import './MenuWebList.scss';

const { confirm } = ModalAntd;

export default function MenuWebList(props) {
    const { menu, setReloadMenuWeb } = props;

    const [listItems, setListItems] = useState([]);
    const [isVisisbleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalContent, setModalContent] = useState(null);

    useEffect(() => {
        const listItemsArray = [];
        menu.forEach(item => {
            listItemsArray.push({
                content: (
                    <MenuItem
                        item={item}
                        activateMenu={activateMenu}
                        editMenuWebModal={editMenuWebModal}
                    />
                )
            });
        });
        setListItems(listItemsArray);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [menu]);

    const activateMenu = (menu, status) => {
        const accessToken = getAccessTokenApi();
        activateMenuApi(accessToken, menu._id, status)
            .then(response => {
                notification['success']({
                    message: response
                });
            })
            .catch(err => {
                notification['error']({
                    message: err
                });
            });
    };

    const onSort = (sortedList, dropEvent) => {
        const accessToken = getAccessTokenApi();

        sortedList.forEach(item => {
            const { _id } = item.content.props.item;
            const order = item.rank;

            updateMenuApi(accessToken, _id, { order });
        });
    };

    const addMenuWebModal = () => {
        setIsVisibleModal(true);
        setModalTitle('Creando nuevo menú');
        setModalContent(
            <AddMenuWebForm
                setIsVisibleModal={setIsVisibleModal}
                setReloadMenuWeb={setReloadMenuWeb}
            />
        );
    };

    const editMenuWebModal = menu => {
        setIsVisibleModal(true);
        setModalTitle(`Editando menú: ${menu.title}`);
        setModalContent(
            <EditMenuWebForm
                setIsVisibleModal={setIsVisibleModal}
                setReloadMenuWeb={setReloadMenuWeb}
                menu={menu}
            />
        );
    };

    return (
        <div className="menu-web-list">
            <div className="menu-web-list__header">
                <Button type="primary" onClick={addMenuWebModal}>
                    Crear menú
                </Button>
            </div>
            <div className="menu-web-list__items">
                <DragSortableList
                    items={listItems}
                    onSort={onSort}
                    type="vertical"
                />
            </div>

            <Modal
                title={modalTitle}
                isVisible={isVisisbleModal}
                setIsVisible={setIsVisibleModal}
            >
                {modalContent}
            </Modal>
        </div>
    );
}

const MenuItem = props => {
    const { item, activateMenu, editMenuWebModal } = props;

    return (
        <List.Item
            actions={[
                <Switch
                    defaultChecked={item.active}
                    onChange={e => activateMenu(item, e)}
                />,
                <Button type="primary" onClick={() => editMenuWebModal(item)}>
                    <EditOutlined />
                </Button>,
                <Button type="danger">
                    <DeleteOutlined />
                </Button>
            ]}
        >
            <List.Item.Meta title={item.title} description={item.url} />
        </List.Item>
    );
};
