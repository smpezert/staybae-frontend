import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useEffect, useMemo, useState } from "react";
import Axios from "src/api/Axios";

type MapProps = {
    lat: number;
    lng: number;
};

const Places = ({ lat, lng }: MapProps) => {

    const { isLoaded } = useLoadScript({
        id: "google-map-script",
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    });

    const PROPERTY_RADIUS = 5000;
    const PLACE_TYPE = "restaurant";

    const [Listing, setListing] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await Axios.get(`${import.meta.env.VITE_GOOGLE_MAPS_API_PLACES_URL}`,
                {
                    headers: { "Access-Control-Allow-Origin": `${import.meta.env.VITE_SERVER_API}` },
                    params: {
                        location: `${lat},${lng}`,
                        radius: PROPERTY_RADIUS,
                        type: PLACE_TYPE,
                        key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
                    },
                });
            setListing(response?.data.results);
        };
        fetchData();
    }, [lat, lng])

    const center = useMemo(() => ({ lat: 0, lng: 0 }), []);

    if (!isLoaded) return <div>Map is loading ...</div>

    if (!lat || !lng) return null;

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
                    {Listing.map((result: any, id: number) => (
                        <div className="flex flex-col my-7 space-x-6" key={id}>
                            <img className="flex items-center h-5 w-5 ml-6 rounded-full"
                                src={result.icon} alt="place icon" height={50} width={150} />
                            <li className="my-1 text-gray-600">{result.name}</li>
                            <li className="my-1  text-gray-400">{result.vicinity}</li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Places;