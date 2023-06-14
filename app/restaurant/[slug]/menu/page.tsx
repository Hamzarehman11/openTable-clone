import RestaurantHeader from "../components/RestaurantHeader";
import RestaurantNavbar from "../components/RestaurantNavbar";
import MenuSec from "./components/MenuSec";
import {RestaurantType} from "../page";
import {PrismaClient} from "@prisma/client";


const prisma = new PrismaClient();



const fetchRestaurantBySlug = async (slug:string):Promise<RestaurantType> => {
    const restaurant = await prisma.restaurant.findUnique({
        where: {
            slug
        },
        select: {
            id: true,
            name: true,
            images: true,
            description: true,
            slug: true,
            location:true
        }
    })
    if(!restaurant){
        throw new Error();
    }
    return restaurant
}

const fetchRestaurantMenu = async (slug:string) => {
    const restaurant = await prisma.restaurant.findUnique({
        where: {
            slug
        },
        select: {
            items:true
        }
    })
    if(!restaurant){
        throw new Error();
    }
    return restaurant.items
}



const RestaurantMenu = async ({params}: {params: {slug:string}}) => {

    const restaurant = await fetchRestaurantBySlug(params.slug)
    const restaurantMenu = await fetchRestaurantMenu(params.slug)

    return (
        <>
            <RestaurantHeader restaurant={restaurant} />
            <div className={'flex m-auto w-2/3 justify-between items-start -mt-11'}>
                <div className={'bg-white w-[100%] rounded p-3 shadow'}>
                    <RestaurantNavbar slug={restaurant.slug}/>
                    <MenuSec menu={restaurantMenu}/>
                </div>
            </div>
        </>
    );
};

export default RestaurantMenu;