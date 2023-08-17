import { useQuery } from "react-query";
import Axios from "src/api/Axios";

const fetchPropertiesByQuery = (
    fromDate: string,
    toDate: string,
    searchLocation: string,
    lng: number,
    lat: number,
    region?: string,
) => {
    const parameters = region
        ? {
            from: fromDate,
            to: toDate,
            city: searchLocation,
            lng: lng,
            lat: lat,
            region: region,
        }
        : {
            from: fromDate, to: toDate, city: searchLocation, lng: lng,
            lat: lat
        };
    return Axios.get("/properties", { params: parameters });
};

export const useSearchResults = (
    fromDate: string,
    toDate: string,
    searchLocation: string,
    lng: number,
    lat: number,
    region?: string,
) => {
    return useQuery({
        queryKey: [`search-properties`, fromDate, toDate, searchLocation, lng, lat, region],
        queryFn: () =>
            fetchPropertiesByQuery(fromDate, toDate, searchLocation, lng, lat, region),
    });
};