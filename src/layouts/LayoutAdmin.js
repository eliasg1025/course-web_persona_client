import React, { useState, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import useAuth from '../hooks/useAuth';
import MenuTop from '../components/Admin/MenuTop';
import MenuSider from '../components/Admin/MenuSider';
import AdminSignIn from '../pages/Admin/Signin';

import './LayoutAdmin.scss';

export default function LayoutAdmin(props) {
    const { routes } = props;
    const [menuCollapsed, setMenuCollapsed] = useState(false);
    const { Header, Content, Footer } = Layout;

    const { user, isLoading } = useAuth();

    console.log(user);

    if (!user) {
        return (
            <Fragment>
                <Route path='/admin/login' component={AdminSignIn} />
                <Redirect to='/admin/login' />
            </Fragment>
        );
    }

    return (
        <Layout>
            <MenuSider menuCollapsed={menuCollapsed} />
            <Layout
                className='layout-admin'
                style={{ marginLeft: menuCollapsed ? '80px' : '200px' }}
            >
                <Header className='layout-admin__header'>
                    <MenuTop
                        menuCollapsed={menuCollapsed}
                        setMenuCollapsed={setMenuCollapsed}
                    />
                </Header>
                <Content className='layout-admin__content'>
                    <LoadRoutes routes={routes} />
                </Content>
                <Footer className='layout-admin__footer'>
                    Elias Guere Canchucaja
                </Footer>
            </Layout>
        </Layout>
    );
}

function LoadRoutes({ routes }) {
    return (
        <Switch>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))}
        </Switch>
    );
}
