import RestaurantHeader from "./components/RestaurantHeader";
import RestaurantDescription from "./components/RestaurantDescription";
import {PrismaClient, Location, Review} from "@prisma/client";


const prisma = new PrismaClient();

export interface RestaurantType {
    id: number,
    name: string,
    images: string[],
    description: string,
    slug: string,
    location:Location,
    reviews: Review[]
}

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
            location:true,
            reviews: true
        }
    })
    if(!restaurant){
        throw new Error();
    }
    return restaurant
}

const RestaurantDetailsPage = async ({params}: {params: {slug:string}}) => {

    const restaurant = await fetchRestaurantBySlug(params.slug)

    return (

        <>
            <RestaurantHeader restaurant={restaurant} />
            <RestaurantDescription restaurant={restaurant}/>
        </>


    );
};

export default RestaurantDetailsPage;