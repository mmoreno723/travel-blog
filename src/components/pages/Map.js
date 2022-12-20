import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import "../../style.css";

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCzerFyclNdKeSEa4iMAIXDGDY5QsMBGds",
  });

  if (!isLoaded) return <div>Loading...</div>;
  if (isLoaded) return <Display />;
}

function Display() {
  return (
    <GoogleMap
      zoom={4}
      center={{ lat: 48, lng: 15 }}
      mapContainerClassName="map-container"
    ></GoogleMap>
  );
}
