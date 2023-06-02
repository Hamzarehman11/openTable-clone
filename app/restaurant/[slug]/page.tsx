import Navbar from "../../components/Navbar";
import RestaurantHeader from "./components/RestaurantHeader";
import RestaurantDescription from "./components/RestaurantDescription";


const RestaurantDetailsPage = () => {
    return (
        <main className={'bg-gray-200 min-h-screen'}>
            <main className={'bg-white max-w-screen-2xl m-auto'}>
                <Navbar />
                <RestaurantHeader />
                <RestaurantDescription />
            </main>
        </main>
    );
};

export default RestaurantDetailsPage;