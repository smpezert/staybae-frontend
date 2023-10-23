import { GoogleMap, Libraries, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useEffect, useMemo, useState } from "react";

const libs: Libraries = ["places"];

type MapProps = {
    lat: number;
    lng: number;
};

const Places = ({ lat, lng }: MapProps) => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries: libs
    });

    const [listing, setListing] = useState([]);

    useEffect(() => {
        const value = window.localStorage.getItem("places");
        setListing(JSON.parse(value ? value : "[]"));
    }, []);

    useEffect(() => {
        if ({ lat, lng }) {
            if (isLoaded) {
                const request = {
                    keyword: "places",
                    location: new google.maps.LatLng(lat, lng),
                    radius: 500,
                };

                const div = document.createElement("div");

                const service = new google.maps.places.PlacesService(div);

                service.nearbySearch(request, (results) => {
                    if (google.maps.places.PlacesServiceStatus.OK) {
                        const places: any = results ? results.map((result: google.maps.places.PlaceResult) => result) : [];

                        setListing(places);
                        window.localStorage.setItem("places", JSON.stringify(listing));
                    }
                });
            }
        }
    }, [{ lat, lng }]);

    return (
        <div>
            <hr className="w-full m-6 border-1 border-gray-200 mx-auto" />
            <div className="flex flex-col py-3 my-2">
                <h1 className="text-xl md:text-2xl font-semibold">Places of interest nearby</h1>
                <ul className="my-3 list-style-type:none;">
                    {listing.map((result: any, id: number) => (
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
    );
};

export default Places;