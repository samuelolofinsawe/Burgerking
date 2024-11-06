import React from 'react';
import Nav from './Nav';
import ActiveLastBreadcrumb from './ActiveLastBreadCrumb';
import { FaPaperPlane } from 'react-icons/fa';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

function Restaurants() {
  const restaurants = [
    { name: "Victoria Island", address: "274 Ajose adeogun",position: [6.4281, 3.4219] },
    { name: "Palms", address: "1 Bisway St, Maroko, Lekki",position:[6.4300, 3.4385]},
    { name: "Lekki", address: "11b Victoria Arobieke St, Lekki Phase 1",position:[6.4474, 3.4822]},
   
  ];

  return (
    <div>
        <Nav/>
    <div className="restaurants-container">
     
      <div className="restaurant-list">
        <ActiveLastBreadcrumb/>
        <div className="location-input">
          <input type="text" placeholder="Please, enter your location" />
          <button><FaPaperPlane size={24}/></button>
        </div>
        
        <h2>Restaurants</h2>
        {restaurants.map((restaurant, index) => (
          <div key={index} className="restaurant-card">
            <h3>{restaurant.name}</h3>
            <p>{restaurant.address}</p>
            <a href="#show-map">Show on map</a>
          </div>
        ))}
      </div>

      <div className="map-section">
        <MapContainer center={[6.4281, 3.4219]} zoom={13} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {restaurants.map((restaurant, index) => (
            <Marker key={index} position={restaurant.position}>
              <Popup>
                <strong>{restaurant.name}</strong><br />
                {restaurant.address}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
    </div>
  );
}

export default Restaurants;
