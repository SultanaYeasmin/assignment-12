import { Outlet } from "react-router-dom"
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
function App() {
  return (
    <>

      <h1 className="text-green-500 text-center text-3xl my-[3%] font-bold">Assignment-12-parcel-management-web</h1>
  <div className="w-full max-w-3xl mx-auto mb-20">
        <MapContainer className="h-[300px] w-full" 
        center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  )
}

export default App
