import Skeleton from '../skeleton/Skeleton';
import PropertyType from 'src/interfaces/Property';
import MediumCard from '../cards/MediumCard';
import { useFetchTopPicks } from 'src/hooks/useFetchTopPicks';

const TopPicks = () => {
    const { isLoading, data, isError, error } = useFetchTopPicks();

    if (isLoading) return <Skeleton />

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-'>
            {!isLoading &&
                data?.data.map((topPickProperty: PropertyType, tpId: number) => {
                    return (
                        <MediumCard property={topPickProperty} key={`top-pick-${tpId}`} />
                    );
                })}
        </div>
    );
};

export default TopPicks;