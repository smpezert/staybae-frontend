interface PropertyType {
    _id?: string;
    city: string;
    country: string;
    region: string;
    lat: number;
    lng: number;
    description: string;
    caption?: string;
    rating: number;
    numVotes: number;
    perNightPrice: string;
    totalPrice: number;
    dateFrom: string;
    dateTo: string;
    numRooms: number;
    numBeds: number;
    numToilets: number;
    sharedProperty: boolean;
    heroImg: string;
    images: string[];
    favourited?: boolean
}

export default PropertyType;