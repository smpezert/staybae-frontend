import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import React, { useMemo, useState } from 'react';

type Coordinates = {
    lat: number;
    lng: number;
};
type MapProps = {
    googleMapsApiKey: string;
};

const Maps: React.FC = () => {
    const { isLoaded } = useLoadScript({
        id: "google-map-script",
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    })
    const center = useMemo(() => ({ lat: 53.457, lng: -2.157 }), [])
    const [selectedMarker, setSelectedMarker] = useState<Coordinates | null>(center);

    if (!isLoaded) return <div>Map is loading ...</div>


    return (
        <div className="flex justify-center p-1 my-2 mx-2 md:my-10">
            <GoogleMap zoom={12} center={center} mapContainerClassName="flex justify-center h-60 w-80">
                <Marker position={center} onClick={() => { setSelectedMarker(center); }}></Marker>
            </GoogleMap>
        </div>
    )
}

export default Maps;