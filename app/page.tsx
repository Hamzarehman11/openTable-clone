import {Inter} from '@next/font/google'
import Header from "./components/Header";
import RestaurantCard from "./components/restaurantCard";
import {PrismaClient, Cuisine, Location, PRICE} from "@prisma/client";

const prisma = new PrismaClient();

export interface RestaurantCardType {
    id: number,
    name:string,
    main_image: string,
    cuisine: Cuisine,
    location: Location,
    price: PRICE
}

const fetchRestaurants = async ():Promise<RestaurantCardType[]> => {
    return await prisma.restaurant.findMany({
        select: {
            id: true,
            name:true,
            main_image: true,
            cuisine: true,
            location:true,
            price: true
        }
    });
}


const inter = Inter({subsets: ['latin']})

export default async function Home() {
    const restaurants = await fetchRestaurants();
    console.log(restaurants)
    return (

        <>
            <Header/>
            <div className="py-3 px-36 mt-10 flex flex-wrap">
                {restaurants.map((restaurant)=>{
                    return (
                        <RestaurantCard restaurant={restaurant}/>
                    )
                })}
            </div>
        </>
    )
}
