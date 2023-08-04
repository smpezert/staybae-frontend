import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import Axios from "src/api/Axios";

const fetchProperty = (propertyId: string) => {
    return Axios.get(`/properties/${propertyId}`);
};

export const useFetchProperty = (
    id: string,
    onSuccessHandler: (data: AxiosResponse) => void
) => {
    return useQuery({
        queryKey: [`property`, id],
        queryFn: () => fetchProperty(id),
        onSuccess(data) {
            onSuccessHandler(data);
        }
    });
};