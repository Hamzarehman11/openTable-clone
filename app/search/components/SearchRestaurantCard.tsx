import Link from "next/link";
import {Cuisine, Location, PRICE, Review} from "@prisma/client";
import Price from "../../components/Price";
import Rating from "../../components/Rating";


interface Restaurant {
    id: number,
    name: string,
    main_image: string,
    price: PRICE,
    cuisine: Cuisine,
    location: Location,
    slug: string,
    reviews: Review[]
}


const SearchRestaurantCard = ({restaurant}: { restaurant: Restaurant }) => {


    const reviewText = () => {
        const reviewPoint = restaurant.reviews.map((review) => review.rating)
        if (restaurant) {
            if (reviewPoint.some((elem) => elem === 5)) {
                return <p className="ml-2 text-sm">Awesome</p>
            } else if (reviewPoint.some((elem) => elem < 5 && elem >= 4)) {
                return <p className="ml-2 text-sm">Good</p>
            } else if (reviewPoint.some((elem) => elem < 4 && elem >= 3.5)) {
                return <p className="ml-2 text-sm">Ordinary</p>
            } else {
                return <p className="ml-2 text-sm">Not Recommended</p>
            }
        }
    }

    return (
        <div className={'border-b flex pb-5 ml-4'}>
            <img className={'w-44 h-42 rounded'} src={restaurant.main_image}
                 alt="restaurant picture"/>
            <div className="pl-5">
                <h2 className="text-2xl font-bold">{restaurant.name}</h2>
                <div className="flex items-start mt-2">
                    <div className="flex mb-2">
                        <Rating rating={restaurant.reviews}/>
                    </div>
                    {reviewText()}
                </div>
                <div className="mb-9">
                    <div className="font-light flex text-reg">
                        <Price price={restaurant.price}/>
                        <p className="mr-4 capitalize">{restaurant.cuisine.name}</p>
                        <p className="mr-4 capitalize">{restaurant.location.name}</p>
                    </div>
                </div>
                <div>
                    <Link className={'text-red-600'} href={`/restaurant/${restaurant.slug}`}>View More
                        Information</Link>
                </div>
            </div>

        </div>
    );
};

export default SearchRestaurantCard;