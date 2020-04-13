import React, { useState, useEffect } from 'react';
import { Switch, List, Button, Modal as ModalAntd, notification } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import DragSortableList from 'react-drag-sortable';
import Modal from '../../../Modal';
import { getAccessTokenApi } from '../../../../api/auth';
import { updateMenuApi } from '../../../../api/menu';

import './MenuWebList.scss';

const { confirm } = ModalAntd;

export default function MenuWebList(props) {
    const { menu, setReloadMenuWeb } = props;

    const [listItems, setListItems] = useState([]);
    const [isVisisbleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalContent, setModalContent] = useState(null);

    console.log(listItems);

    useEffect(() => {
        const listItemsArray = [];
        menu.forEach(item => {
            listItemsArray.push({
                content: <MenuItem item={item} />
            });
        });
        setListItems(listItemsArray);
    }, [menu]);

    const onSort = (sortedList, dropEvent) => {
        const accessToken = getAccessTokenApi();

        sortedList.forEach(item => {
            const { _id } = item.content.props.item;
            const order = item.rank;

            updateMenuApi(accessToken, _id, { order });
        });
    };

    return (
        <div className="menu-web-list">
            <div className="menu-web-list__header">
                <Button type="primary">Menu menu</Button>
            </div>
            <div className="menu-web-list__items">
                <DragSortableList
                    items={listItems}
                    onSort={onSort}
                    type="vertical"
                />
            </div>
        </div>
    );
}

const MenuItem = props => {
    const { item } = props;

    return (
        <List.Item
            actions={[
                <Switch defaultChecked={item.active} />,
                <Button type="primary">
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
