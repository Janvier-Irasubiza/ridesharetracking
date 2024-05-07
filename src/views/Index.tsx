import { GoogleMap, LoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -1.939826787816454,
  lng: 30.0445426438232,
};

const Index = () => {
  return (
    <div className="body">
      <LoadScript googleMapsApiKey="YOUR_API_KEY">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={12}
        ></GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Index;
