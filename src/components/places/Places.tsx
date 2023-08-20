import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

type MapProps = {
    lat: number;
    lng: number;
};

const Places = ({ lat, lng }: MapProps) => {

    const { isLoaded } = useLoadScript({
        id: "google-map-script",
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    });

    const center = useMemo(() => ({ lat: 0, lng: 0 }), []);

    if (!isLoaded) return <div>Map is loading ...</div>

    if (!lat || !lng) {
        return null;
    }

    return (
        <div className="flex justify-center p-0 my-0 mx-2">
            <GoogleMap zoom={2} center={center} mapContainerClassName="h-80 w-full object-cover">
                <MarkerF position={{ lat: lat, lng: lng }} />
            </GoogleMap>
        </div>

    )
}

export default Places;