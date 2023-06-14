import RestaurantReviews from "./RestaurantReviews";
import RestaurantNavbar from "./RestaurantNavbar";
import ReservationCard from "./ReservationCard";
import {RestaurantType} from "../page";


interface Props {
    restaurant: RestaurantType
}


const RestaurantDescription = ({restaurant}: Props) => {

    const restaurantImages = restaurant.images.map((image) => {
        return (
            <img className={'w-56 h-44 mr-1 mb-1'}
                 src={image} alt=""/>
        )
    })

    return (
        <div className={'flex m-auto w-2/3 justify-between items-start -mt-11'}>
            <div className={'bg-white w-[70%] rounded p-3 shadow'}>
                <RestaurantNavbar slug={restaurant.slug}/>
                {/*Restaurant Title*/}
                <div className={'mt-4 border-b pb-6'}>
                    <h1 className={'font-bold text-4xl'}>{restaurant.name}</h1>
                </div>
                {/*Restaurant Title*/}

                {/*Restaurant Ratings & Reviews*/}
                <div className={'flex items-end'}>
                    <div className={'ratings mt-2 flex items-center'}>
                        <p>******</p>
                        <p className={'text-reg ml-3'}>4.9</p>
                    </div>
                    <div>
                        <p className={'text-reg ml-4'}>600 Reviews</p>
                    </div>
                </div>
                {/*Restaurant Ratings & Reviews*/}

                {/*Restaurant Desc*/}
                <div className={'mt-4'}>
                    <p className={'text-md text-start font-light'}>{restaurant.description}</p>
                </div>
                {/*Restaurant Desc*/}

                {/*Restaurant Images*/}
                <div>
                    <h1 className={'font-bold text-2xl mt-10 mb-7 border-b pb-5'}>{restaurant.images.length} Photos</h1>
                    <div className={'flex flex-wrap'}>
                        {restaurantImages}
                    </div>
                </div>
                {/*Restaurant Images*/}
                <RestaurantReviews/>
            </div>

            <div className="w-[27%] relative text-reg">
                <ReservationCard/>
            </div>
        </div>
    );
};

export default RestaurantDescription;