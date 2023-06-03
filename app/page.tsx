import {Inter} from '@next/font/google'
import Header from "./components/Header";
import RestaurantCard from "./components/restaurantCard";


const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (

        <>
            <Header/>
            <RestaurantCard/>
        </>
    )
}
