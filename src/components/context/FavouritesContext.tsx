import { ReactElement, createContext, useState } from "react";
import PropertyType from "src/interfaces/Property";

interface FavouriteContentProps {
    favourites: PropertyType[];
    totalFavourites: number;
    addFavourites: (property: PropertyType) => void;
    removeFavourites: (id: string) => void;
    isFavourite: (id: string) => boolean;
}

const initialValues: FavouriteContentProps = {
    favourites: [],
    totalFavourites: 0,
    addFavourites: (property: PropertyType) => { },
    removeFavourites: (id: string) => { },
    isFavourite: (id: string) => true
}

const FavouriteContext = createContext<FavouriteContentProps>(initialValues);

type FavouriteChildrenType = { children?: ReactElement | ReactElement[] };

export const FavouriteContextProvider = ({ children }: FavouriteChildrenType): ReactElement => {
    const [userFavourites, setUserFavourites] = useState<PropertyType[]>([]);

    const addPropertyAsFavourite = (property: PropertyType) => {
        setUserFavourites((prevFavourites) => {
            return prevFavourites.concat(property);
        })
    }

    const removePropertyFromFavourites = (id: string) => {
        setUserFavourites((prevFavourites) => {
            return prevFavourites.filter(property => property._id !== id)
        })
    }

    const isFavouriteProperty = (id: string) => userFavourites.some(property => property._id === id);

    const context = {
        favourites: userFavourites,
        totalFavourites: userFavourites.length,
        addFavourites: addPropertyAsFavourite,
        removeFavourites: removePropertyFromFavourites,
        isFavourite: isFavouriteProperty
    }

    return <FavouriteContext.Provider value={context}>{children}</FavouriteContext.Provider>
}

export default FavouriteContext;