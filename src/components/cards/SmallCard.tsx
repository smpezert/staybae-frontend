import { Link, useNavigate } from 'react-router-dom';
import useFavourite from 'src/hooks/useFavourite';
import { HeartIcon as Favourited } from '@heroicons/react/24/solid';

interface SmallCardProps {
    id: string;
    city: string;
    country: string;
    heroImg: string;
    setIsShowFavourites: (val: boolean) => void;
}

const SmallCard = ({ id, city, country, heroImg, setIsShowFavourites }: SmallCardProps) => {
    const navigate = useNavigate();

    const { removeFavourites } = useFavourite();

    const removeHandler = () => {
        removeFavourites(id);
    }

    const onClickHandler = () => {
        setIsShowFavourites(false);
        navigate(`/property/${id}`);
    };

    return (
        <div className='flex flex-col space-x-4 items-center cursor-pointer hover:shadow-md p-4'>
            <div className="overflow-hidden rounded-t-lg w-full ml-5">
                <div className='flex flex-row-reverse'>
                    <Favourited className='text-red-600 h-6 top-4 pt-0 cursor-pointer hover:scale-110'
                        onClick={removeHandler} title='Remove from favourites' />
                </div>
                <div className="flex flex-row items-center" onClick={onClickHandler}>
                    <div className="overflow-hidden rounded-lg w-32">
                        <img src={heroImg} className="object-cover relative w-full h-32" alt={`${city}, ${country}`} />
                    </div>
                    <div className="flex flex-col ml-3">
                        <span className="text-sm font-semibold">{city}, {country}</span>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default SmallCard;