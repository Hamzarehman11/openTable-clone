import RestaurantHeader from "../components/RestaurantHeader";
import RestaurantNavbar from "../components/RestaurantNavbar";
import MenuSec from "./components/MenuSec";


const RestaurantMenu = () => {
    return (

        <>
            <RestaurantHeader/>
            <div className={'flex m-auto w-2/3 justify-between items-start -mt-11'}>
                <div className={'bg-white w-[100%] rounded p-3 shadow'}>
                    <RestaurantNavbar/>
                    <MenuSec/>
                </div>
            </div>
        </>
    );
};

export default RestaurantMenu;