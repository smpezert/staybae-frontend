import { UseBaseQueryOptions, useQuery } from "react-query";
import Axios from "src/api/Axios";
import { AxiosResponse } from "axios";

const fetchProperty = (props: UseBaseQueryOptions) => {
    const propertyId = props.queryKey ? props.queryKey[1] : 0;
    return Axios.get(`/properties/${propertyId}`);
}

export const useFetchProperty = (
    id: string,
    onSuccess: (data: AxiosResponse) => void
) => {
    return useQuery([`property-detail`, id], fetchProperty, {
        onSuccess
    });
}