import React from 'react'
import { Switch, Route, RouteProps } from "react-router-dom";
import './index.scss'
import routes from '../../route/child'
// import moment from 'moment'

export default class SiderDemo extends React.Component<any, any> {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Switch>
                {
                    routes.map((route: RouteProps) => <Route exact={route.path === "/home"} key={'router-' + route.path} path={route.path} component={route.component} />)
                }
            </Switch>
        );
    }
}
