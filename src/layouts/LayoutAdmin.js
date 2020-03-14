import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import './LayoutAdmin.scss';

export default function LayoutAdmin(props) {
  const { routes } = props;
  const { Header, Content, Footer } = Layout;

  console.log('Estas son las props: ', props);

  return (
    <Layout>
      {/* TO DO: Menu Sider */}
      <Layout className='layout-admin'>
        <Header className='layout-admin__header'>
          {/* TO DO: Menu Top */}
        </Header>
        <Content className='layout-admin__content'>
          <LoadRoutes routes={routes} />
        </Content>
        <Footer className='layout-admin__footer'>Elias Guere Canchucaja</Footer>
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
