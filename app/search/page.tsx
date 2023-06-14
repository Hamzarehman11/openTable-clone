import Header from "../components/Header";
import SideBar from "./components/SideBar";
import SearchRestaurantCard from "./components/SearchRestaurantCard";
import {PrismaClient} from "@prisma/client";


const prisma = new PrismaClient();


const fetchRestaurantsByCity = (city: string) => {
    const select = {
        id: true,
        name: true,
        main_image: true,
        price: true,
        cuisine: true,
        location: true,
        slug: true
    }
    if (!city) return prisma.restaurant.findMany({select})
    return prisma.restaurant.findMany({
        where: {
            location: {
                name: {
                    equals: city.toLowerCase()
                }
            }
        },
        select
    })
}


const fetchLocations = async () => {
    return prisma.location.findMany()
}

const fetchCuisines = async () => {
    return prisma.cuisine.findMany()
}


const Search = async ({searchParams}: { searchParams: { city: string } }) => {

    const restaurants = await fetchRestaurantsByCity(searchParams.city);
    const locations = await fetchLocations();
    const cuisines = await fetchCuisines();

    const renderRestaurants = restaurants.map((restaurant) => {
        return (
            <SearchRestaurantCard restaurant={restaurant}/>
        )
    })


    return (

        <>
            <Header/>
            <div className={'flex py-4 m-auto w-2/3 justify-between items-start'}>
                <div className="w-1/5">
                    <SideBar locations={locations} cuisines={cuisines}/>
                </div>
                <div className="w-5/6">
                    {restaurants.length ? renderRestaurants : 'There is no restaurant found in this area!'}
                </div>
            </div>
        </>

    )
        ;
};

export default Search;