import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './config/routes';
import AuthProvider from './providers/AuthProviders';

import './App.scss';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    {routes.map((routes, index) => (
                        <RouteWithSubRoutes key={index} {...routes} />
                    ))}
                </Switch>
            </Router>
        </AuthProvider>
    );
}

function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            exact={route.exact}
            render={props => (
                <route.component routes={route.routes} {...props} />
            )}
        />
    );
}

export default App;
