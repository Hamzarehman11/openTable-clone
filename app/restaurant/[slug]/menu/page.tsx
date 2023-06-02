import RestaurantHeader from "../components/RestaurantHeader";
import Navbar from "../../../components/Navbar";
import RestaurantNavbar from "../components/RestaurantNavbar";
import MenuSec from "./components/MenuSec";


const RestaurantMenu = () => {
    return (
        <main className={'bg-gray-200 min-h-screen'}>
            <main className={'bg-white max-w-screen-2xl m-auto'}>
                <Navbar/>
                <RestaurantHeader/>
                <div className={'flex m-auto w-2/3 justify-between items-start -mt-11'}>
                    <div className={'bg-white w-[100%] rounded p-3 shadow'}>
                        <RestaurantNavbar/>
                        <MenuSec/>
                    </div>
                </div>
            </main>
        </main>
    );
};

export default RestaurantMenu;