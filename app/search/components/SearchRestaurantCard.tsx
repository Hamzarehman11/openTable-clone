import Link from "next/link";
import {Cuisine, Location, PRICE} from "@prisma/client";


interface Restaurant {
    id: number,
    name: string,
    main_image: string,
    price: PRICE,
    cuisine: Cuisine,
    location: Location,
    slug: string
}


const SearchRestaurantCard = ({restaurant}: { restaurant: Restaurant }) => {

    return (
        <div className={'border-b flex pb-5 ml-4'}>
            <img className={'w-44 h-42 rounded'} src={restaurant.main_image}
                 alt="restaurant picture"/>
            <div className="pl-5">
                <h2 className="text-2xl font-bold">{restaurant.name}</h2>
                <div className="flex items-start mt-2">
                    <div className="flex mb-2">*****</div>
                    <p className="ml-2 text-sm">Awesome</p>
                </div>
                <div className="mb-9">
                    <div className="font-light flex text-reg">
                        <p className="mr-4">$$$</p>
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