import React, {useEffect, useRef, useState} from 'react';
import {FeatureGroup, MapContainer, Marker, Polyline, TileLayer, useMap} from "react-leaflet";
import {customMarkerUserPos} from "../CustomMarker.js";

// function SetView({coords}){
//     const map = useMap()
//     map.setView(coords)
//
//     return null
// }

const MapComponent = ({positions, center}) => {
    const [zoom, setZoom] = useState(13);
    const mapRef = useRef(null)

    const limeOptions = { color: 'lime' };

    useEffect(() => {
        if (positions && positions.length > 0) {
            const bounds = L.latLngBounds(positions);
            const map = mapRef.current;
            if (map) {
                map.fitBounds(bounds);
                setZoom(map.getZoom())
            }
        }
    }, [positions]);

    return (
        <MapContainer
            ref={mapRef}
            center={center}
            zoom={zoom}
            scrollWheelZoom={true}
        >
            <FeatureGroup>
                {positions?.map((mark, i) => (
                    <Marker key={i} position={mark} icon={customMarkerUserPos} />
                ))}
                <Polyline pathOptions={limeOptions} positions={positions} />
            </FeatureGroup>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {/*<SetView coords={center}/>*/}
        </MapContainer>
    );
};



export default MapComponent;