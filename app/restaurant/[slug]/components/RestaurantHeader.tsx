import {RestaurantType} from "../page";


interface Props {
    restaurant: RestaurantType
}

const RestaurantHeader = ({restaurant}: Props) => {


    return (
        <main>
            <div className={'h-96 overflow-hidden'}>
            <div className={'bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2 h-full flex justify-center items-center'}>
                <h1 className={'text-6xl text-white text-shadow text-center'}>{restaurant.name} ({restaurant.location.name})</h1>
            </div>
            </div>
        </main>
    );
};

export default RestaurantHeader;