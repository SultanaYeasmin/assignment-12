import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css';

const MapView = ({ latitude, longitude }) => {
    if (!latitude || !longitude) return <p>Not found</p>
    const position = [latitude, longitude]
    console.log(position)
    return (
        <div className="w-full mx-auto h-[400px]">
            <MapContainer center={position} zoom={13} scrollWheelZoom={false} className='w-full h-full'>
                <TileLayer
                    attribution='&copy;
                     <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        delivery address!
                    </Popup>
                </Marker>
            </MapContainer>

        </div>
    );
};

export default MapView;

