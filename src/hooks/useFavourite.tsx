import { useContext } from "react"
import FavouriteContext from "src/components/context/FavouritesContext"

const useFavourite = () => {
    return useContext(FavouriteContext);
}

export default useFavourite;