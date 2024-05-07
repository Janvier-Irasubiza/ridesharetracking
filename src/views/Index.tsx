import { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, Polyline } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '100vh', 
};

const center = {
  lat: -1.939826787816454,
  lng: 30.0445426438232,
};

const stops = [
  { name: 'Nyabugogo', position: { lat: -1.939826787816454, lng: 30.0445426438232 } },
  { name: 'Stop A', position: { lat: -1.9355377074007851, lng: 30.060163829002217 } },
  { name: 'Stop B', position: { lat: -1.9358808342336546, lng: 30.08024820994666 } },
  { name: 'Stop C', position: { lat: -1.9489196023037583, lng: 30.092607828989397 } },
  { name: 'Stop D', position: { lat: -1.9592132952818164, lng: 30.106684061788073 } },
  { name: 'Stop E', position: { lat: -1.9487480402200394, lng: 30.126596781356923 } },
  { name: 'Kimironko', position: { lat: -1.9365670876910166, lng: 30.13020167024439 } },
];

const Index = () => {
  const [driverPosition, setDriverPosition] = useState<{ lat: number | null, lng: number | null }>({ lat: null, lng: null });

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      position => {
        setDriverPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      },
      error => console.error(error),
      { enableHighAccuracy: true }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return (
    <div>
      <div className="body">
        <LoadScript
          googleMapsApiKey="API_KEY"
        >
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={12}
          >
            <Polyline
              path={stops.map(stop => stop.position)}
              options={{
                strokeColor: "#FF0000",
                strokeOpacity: 1.0,
                strokeWeight: 2,
              }}
            />
            {driverPosition.lat && driverPosition.lng && (
              <Marker
                position={{ lat: driverPosition.lat, lng: driverPosition.lng }}
                icon={{
                  url: "https://maps.google.com/mapfiles/kml/shapes/bus.png",
                  scaledSize: new window.google.maps.Size(40, 40),
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(20, 20),
                }}
              />
            )}
            {stops.map(stop => (
              <Marker
                key={stop.name}
                position={stop.position}
                label={stop.name}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default Index;
