import React from 'react';
import { Layout } from 'antd';
import RoutesTable from './components/RoutesTable/RoutesTable.jsx';
import MapComponent from "./components/MapComponent/MapComponent.jsx";
import 'leaflet/dist/leaflet.css';

const App = () => {
    const { Content, Sider } = Layout;

    return (
        <Layout style={{ height: '100vh' }}>
            <Sider width={600} theme="light">
                <RoutesTable />
            </Sider>
            <Content style={{ width: 'calc(100% - 600px)' }}>
                <MapComponent/>
            </Content>
        </Layout>
    );
};

export default App;
