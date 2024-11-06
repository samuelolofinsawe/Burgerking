import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';


function MapComponent({ locations }) {
    const [activeLocation, setActiveLocation] = useState(null);

    // Function component to change the map view based on active location
    const ChangeMapView = ({ center, zoom }) => {
        const map = useMap();
        map.setView(center, zoom);
        return null;
    };

    return (
        <MapContainer center={[6.5244, 3.3792]} zoom={12} className="map-container">
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {activeLocation && <ChangeMapView center={[activeLocation.lat, activeLocation.lng]} zoom={15} />}
            {locations.map((location, index) => (
                <Marker
                    key={index}
                    position={[location.lat, location.lng]}
                    eventHandlers={{
                        click: () => {
                            setActiveLocation({ lat: location.lat, lng: location.lng });
                        }
                    }}
                >
                    <Popup>{location.name}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default MapComponent;
