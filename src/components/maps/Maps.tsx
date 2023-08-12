import { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF, InfoWindow, GoogleMapProps } from '@react-google-maps/api';

const Maps = () => {

    const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    if (googleMapsApiKey === undefined) {
        return <div>Error</div>;
    }

    return (
        <div className="">
            <GoogleMap
                bootstrapURLKeys={{ key: googleMapsApiKey || "" }}
                defaultZoom={10}
                defaultCenter={50}
                margin={[50, 50, 50, 50]}
            >
            </GoogleMap>
        </div>
    )
}

export default Maps;