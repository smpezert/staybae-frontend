import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

type MapProps = {
    lat: number;
    lng: number;
};
console.log(location.pathname);

const URL = `${import.meta.env.VITE_GOOGLE_MAPS_API_PLACES_URL}?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&location=-33.8670522,151.1957362&radius=5000&type=restaurant`;

const results = await fetch(URL)
    .then(data => data.json())
    .then(jsonData => jsonData.results)
    .catch(error => console.log(error));

const Places = ({ lat, lng }: MapProps) => {

    const { isLoaded } = useLoadScript({
        id: "google-map-script",
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    });

    const center = useMemo(() => ({ lat: 0, lng: 0 }), []);

    if (!isLoaded) return <div>Map is loading ...</div>

    if (!lat || !lng) return null;

    if (!results) return null;

    return (
        <div>
            <div className="flex justify-center p-0">
                <GoogleMap zoom={2} center={center} mapContainerClassName="h-80 w-full object-cover">
                    <MarkerF position={{ lat: lat, lng: lng }} />
                </GoogleMap>
            </div>
            <hr className="w-full m-6 border-1 border-gray-200 mx-auto" />
            <div className="flex flex-col py-3 my-2">
                <h1 className="text-xl md:text-2xl font-semibold">Places of interest nearby</h1>
                <ul className="my-3 list-style-type:none;">
                    {results.map((result: any, id: number) => (
                        <div className="flex flex-row space-x-6" key={id}>
                            <li className="my-2 text-gray-500">{result.name}</li>
                            <li>_</li>
                            <li className="my-2  text-gray-500">{result.vicinity}</li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Places;