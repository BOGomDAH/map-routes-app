import React, {useEffect, useRef} from 'react';
import {FeatureGroup, MapContainer, Marker, Polyline, TileLayer} from "react-leaflet";
import {customMarker} from "../MapUI/CustomMarker.js";
import {useSelector} from "react-redux";
import L from "leaflet";
import {message} from "antd";
import MapSpinner from "../MapSpinner/MapSpinner.jsx";

const MapComponent = () => {
    const {data: positions, loading, error} = useSelector((state) => state.route);
    const mapRef = useRef(null)

    useEffect(() => {
        fitBoundsToPositions()
    }, [positions]);

    useEffect(() => {
        if (error) {
            message.error(error);
        }
    }, [error]);

    const fitBoundsToPositions = () => {
        if (positions && positions.length > 0) {
            const bounds = L.latLngBounds(positions);
            const map = mapRef.current;
            map.fitBounds(bounds)
        }
    };

    return (
        <div className="map__container">
            {loading && <MapSpinner/>}
            <MapContainer
                center={[50, 15]}
                zoom={13}
                ref={mapRef}
                scrollWheelZoom={true}
            >
                {positions && (
                    <FeatureGroup>
                        {positions.map((mark, i) => (
                            <Marker key={i} position={mark} icon={customMarker} />
                        ))}
                        <Polyline pathOptions={{ color: 'lime' }} positions={positions} />
                    </FeatureGroup>
                )}
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </MapContainer>
        </div>
    );
};

export default MapComponent;