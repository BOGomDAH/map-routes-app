import React, { useEffect, useRef, useState } from 'react';
import { Layout } from 'antd';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import useOSRMService from './HTTP-services/apiService.js';
import RoutesTable from './components/RoutesTable/RoutesTable.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setPositions, setSelectedRoute } from './reducers/routeSlice.js';
import MapComponent from "./components/MapComponent/MapComponent.jsx";

const App = () => {
    const { fetchRoutePolyline } = useOSRMService();
    const positions = useSelector((state) => state.route.positions);
    const selectedRoute = useSelector((state) => state.route.selectedRoute);
    const [center, setCenter] = useState([61.0666922, -107.9917071]);
    const dispatch = useDispatch();
    const { Content, Sider } = Layout;

    useEffect(() => {
        fetchRoutePolyline(selectedRoute).then((r) => {
            dispatch(setPositions(r.coordinates));
        });
    }, [selectedRoute]);

    useEffect(() => {
        if (positions && positions.length > 0) {
            const bounds = new L.LatLngBounds(positions);
            const center = bounds.getCenter();
            setCenter([center.lat, center.lng]);
        }
    }, [positions]);

    return (
        <Layout style={{ height: '100vh' }}>
            <Sider width={600} theme="light">
                <RoutesTable />
            </Sider>
            <Content>
                {positions && <MapComponent positions={positions} center={center}/>}
            </Content>
        </Layout>
    );
};

export default App;
