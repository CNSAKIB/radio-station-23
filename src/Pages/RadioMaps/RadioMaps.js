import React from 'react';
import './RadioMap.css'
import { MapContainer, TileLayer } from 'react-leaflet';
const RadioMaps = () => {
    const position = [51.505, -0.09]
    return (
        <div className='mapContainer'>
            <MapContainer className='mapContainer' center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    );
};

export default RadioMaps;