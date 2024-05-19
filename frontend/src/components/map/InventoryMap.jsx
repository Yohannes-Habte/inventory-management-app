import React, { useState, useRef, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  FeatureGroup,
  Circle,
} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import additionalProvider from "./additionalProvider.js";
import { statesData } from "../../data/GeographicData.js";

// delete L.Icon.Default.prototype._getIconUrl;

// Marker Icon
const markerIcon = new L.Icon({
  iconUrl: require("../../assets/icon2.png"),
  iconSize: [35, 45],
  iconAnchor: [17, 46], // [left/right, top/bottom]
  popupAnchor: [0, -46],
});

const InventoryMap = () => {
  const [center, setCenter] = useState({ lat: 15, lng: 39 });
  const zoom_level = 5;
  const mapRef = useRef();

  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", lng: "" },
    error: false,
  });

  // Location navigation success

  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  // Location navigation failure
  const onError = (location) => {
    setLocation({
      loaded: true,
      error: true,
    });
  };

  // Display
  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      });
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  // Show my location
  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      mapRef.current.leafletElement.flyTo(
        [location.coordinates.lat, location.coordinates.lng],
        zoom_level,
        { animate: true }
      );
    } else {
      alert(location.error.message);
    }
  };

  // ================================================================================
  // Leaflet draw
  //==================================================================================

  const _onEditPath = (e) => console.log(e);
  const _onCreate = (e) => console.log(e);
  const _onDeleted = (e) => console.log(e);

  return (
    <>
      <MapContainer
        center={center}
        zoom={zoom_level}
        scrollWheelZoom={true}
        ref={mapRef}
        style={{ width: "100%", height: "50vh" }}
      >
        <FeatureGroup>
          <EditControl
            position="topright"
            onEdited={_onEditPath}
            onCreated={_onCreate}
            onDeleted={_onDeleted}
            draw={{
              rectangle: false,
              circlemarker: false,
              marker: false,
              polyline: false,
              polygon: false,
            }}
          />
          <Circle center={[51.51, -0.06]} radius={200} />
        </FeatureGroup>
        <TileLayer
          attribution={additionalProvider.maptiler.attribution}
          url={additionalProvider.maptiler.url}
        />
        {location.loaded && !location.error && (
          <Marker
            position={[location.coordinates.lat, location.coordinates.lng]}
            icon={markerIcon}
          >
            <Popup>
              <b>Lisa Inventory Str.13B </b>
            </Popup>
          </Marker>
        )}
        {/* {statesData.features.map((state) => {
          const coordinates = state.geometry.coordinates[0].map((item) => [
            item[1],
            item[0],
          ]);
          return (
            <Polygon
              pathOptions={{
                fillColor: "#fff8dc",
                fillOpacity: 0.7,
                weight: 2,
                opacity: 1,
                dashArray: 3,
                color: "white",
              }}
              positions={coordinates}
              eventHandlers={{
                mouseover: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    fillOpacity: 0.7,
                    weight: 5,
                    dashArray: "",
                    color: "#666",
                    fillColor: "#FACDCC",
                  });
                },

                mouseout: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    fillOpacity: 0.7,
                    weight: 2,
                    dashArray: "3",
                    color: "white",
                    fillColor: "#fff8dc",
                  });
                },

                click: (e) => {},
              }}
            />
          );
        })} */}
      </MapContainer>
      <div>
        <button onClick={showMyLocation}>Locate Me</button>
      </div>
    </>
  );
};

export default InventoryMap;
