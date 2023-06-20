import Link from "next/link";
import {RestaurantCardType} from "../page";
import Price from "./Price";
import Rating from "./Rating";

interface Props {
    restaurant: RestaurantCardType;
}


const RestaurantCard = ({restaurant}: Props) => {

    return (

        <main>
            <div className={'w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer'}>
                <Link href={`/restaurant/${restaurant.slug}`}>
                    <img className={'w-full h-36'}
                         src={restaurant.main_image}
                         alt="restaurant-img"/>
                    <div className={'p-1'}>
                        <h3 className={'font-bold text-2xl mb-2'}>{restaurant.name}</h3>
                        <div className={'flex flex-start'}>
                            <div className={'flex mb-2'}>
                                <Rating rating={restaurant.reviews} />
                            </div>
                            <p className={'ml-2'}>{restaurant.reviews.length} review{restaurant.reviews.length <= 1 ? '' : 's'}</p>
                        </div>
                        <div className={'flex text-reg font-light capitalize'}>
                            <p className={'mr-3'}>English</p>
                            {/*Price*/}
                            <Price price={restaurant.price} />
                            {/*Price*/}
                            <p>Lahore</p>
                        </div>
                        <p className={'text-sm mt-2 font-bold'}>Booked 4 time today</p>
                    </div>
                </Link>
            </div>
        </main>

    );
};

export default RestaurantCard;