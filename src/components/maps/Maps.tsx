import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';
import { useMemo } from 'react';
import PropertyType from 'src/interfaces/Property';

type MapProps = {
    property: PropertyType[];
};

const Maps = ({ property }: MapProps) => {
    console.log(property);
    const { isLoaded } = useLoadScript({
        id: "google-map-script",
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    });

    const center = useMemo(() => ({ lat: 53.457, lng: -2.157 }), []);

    if (!isLoaded) return <div>Map is loading ...</div>

    if (!property) {
        return null;
    }

    return (
        <div className="flex justify-center p-1 my-2 mx-2">
            <GoogleMap zoom={3} center={center} mapContainerClassName="h-80 w-full object-cover">
                {property.map((property, sId) => (
                    <MarkerF position={{ lat: property.lat, lng: property.lng }} key={sId} />))}
            </GoogleMap>
        </div>
    )
}

export default Maps;