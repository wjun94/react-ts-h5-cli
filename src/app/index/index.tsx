import React from 'react'
import { Layout, Menu, Button, Breadcrumb } from 'antd';
import { Switch, Route, RouteProps } from "react-router-dom";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
} from '@ant-design/icons';
import './index.scss'
import routes from '../../route/child'
// import moment from 'moment'

const { Header, Sider, Content, Footer } = Layout;

export default class SiderDemo extends React.Component<any, any> {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    onLoginout = () => {
        this.props.history.push('/login')
    }

    onMenu = (node: string) => {
        switch (node) {
            case '1':
                this.props.history.push('/home')
                break
            case '2':
                this.props.history.push('/details')
                break
            case '3':
                this.props.history.push('/mine')
                break
        }
    }

    render() {
        return (
            <Layout className="app-page">
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="info flex-top-center">
                        <p>&nbsp;中午好</p>
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        {
                            ['1', '2', '3'].map(v => (
                                <Menu.Item key={v} icon={<UserOutlined />} onClick={() => this.onMenu(v)}>
                                    nav {v}
                                </Menu.Item>
                            ))
                        }
                        {/* <Menu.Item key="1" onClick={this.onMenu} >
                            nav 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            nav 2
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            nav 3
                        </Menu.Item> */}
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                        <Button onClick={this.onLoginout} className='login-out'>退出</Button>
                    </Header>
                    <Content className="site-layout-background">
                        <Breadcrumb style={{ margin: '16px 24px' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className='app-content'>
                            <Switch>
                                {
                                    routes.map((route: RouteProps) => <Route exact={route.path === "/home"} key={'router-' + route.path} path={route.path} component={route.component} />)
                                }
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Longgang Job ©2020 Created by Hangzhou</Footer>
                </Layout>
            </Layout>
        );
    }
}
