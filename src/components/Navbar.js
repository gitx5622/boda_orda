import React, {Component} from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content} = Layout;

class Navbar extends Component {
    render() {
        return (
            <div>
                <Layout className="layout">
                    <Header>
                        <div className="logo" />
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                            <Menu.Item key="1">Boda_Orda</Menu.Item>
                            <Menu.Item style={{float:"right"}} key="1">Boda_Orda</Menu.Item>
                            <Menu.Item style={{float:"right"}} key="1">Boda_Orda</Menu.Item>
                            <Menu.Item style={{float:"right"}} key="1">Boda_Orda</Menu.Item>
                            <Menu.Item style={{float:"right"}} key="1">Boda_Orda</Menu.Item>
                            <Menu.Item style={{float:"right"}} key="1">Boda_Orda</Menu.Item>
                            <Menu.Item style={{float:"right"}} key="1">Boda_Orda</Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default Navbar;

