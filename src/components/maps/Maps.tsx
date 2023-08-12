import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useLoadScript, MarkerF, InfoWindow, GoogleMapProps } from '@react-google-maps/api';


interface IMap {
    mapType: google.maps.MapTypeId,
    mapTypeControl?: boolean;
}

type GoogleLatLng = google.maps.LatLng;
type GoogleMap = google.maps.Map;

const Maps: React.FC<IMap> = ({ mapType, mapTypeControl = false }) => {

    const ref = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<GoogleMap>();

    const startMap = (): void => {
        if (!map) {
            defaultMapStart();
        }
    }

    useEffect(startMap, [map]);

    const defaultMapStart = (): void => {
        const defaultAddress = new google.maps.LatLng(53.457, 2.157);
        initMap(5, defaultAddress);
    }

    const initMap = (zoomLevel: number, address: GoogleLatLng): void => {
        if (ref.current) {
            setMap(
                new google.maps.Map(ref.current, {
                    zoom: zoomLevel,
                    center: address,
                    mapTypeControl: mapTypeControl,
                    streetViewControl: false,
                    zoomControl: true,
                    mapTypeId: mapType,
                    draggableCursor: 'pointer',
                })
            );
        }
    }

    return (
        <div className="flex justify-center p-7">
            <div ref={ref} className="flex justify-center h-60 w-80"></div>
        </div>
    )
}

export default Maps;