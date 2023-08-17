import { useQuery } from "react-query";
import Axios from "src/api/Axios";

const fetchPropertiesByQuery = (
    searchLocation: string,
    lng: number,
    lat: number,
    region?: string,
) => {
    const parameters = region
        ? {
            city: searchLocation,
            lng: lng,
            lat: lat,
            region: region,
        }
        : {
            city: searchLocation,
            lng: lng,
            lat: lat
        };
    return Axios.get("/properties", { params: parameters });
};

export const usePropertyMapResults = (
    searchLocation: string,
    lng: number,
    lat: number,
    region?: string,
) => {
    return useQuery({
        queryKey: [`search-properties`, searchLocation, lng, lat, region],
        queryFn: () =>
            fetchPropertiesByQuery(searchLocation, lng, lat, region),
    });
};