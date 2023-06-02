import RestaurantReviews from "./RestaurantReviews";
import RestaurantNavbar from "./RestaurantNavbar";
import ReservationCard from "./ReservationCard";

const RestaurantDescription = () => {


    return (
        <div className={'flex m-auto w-2/3 justify-between items-start -mt-11'}>
            <div className={'bg-white w-[70%] rounded p-3 shadow'}>
                <RestaurantNavbar/>
                {/*Restaurant Title*/}
                <div className={'mt-4 border-b pb-6'}>
                    <h1 className={'font-bold text-4xl'}>Restaurant Name</h1>
                </div>
                {/*Restaurant Title*/}

                {/*Restaurant Ratings & Reviews*/}
                <div className={'flex items-end'}>
                    <div className={'ratings mt-2 flex items-center'}>
                        <p>******</p>
                        <p className={'text-reg ml-3'}>4.9</p>
                    </div>
                    <div>
                        <p className={'text-reg ml-4'}>600 Reviews</p>
                    </div>
                </div>
                {/*Restaurant Ratings & Reviews*/}

                {/*Restaurant Desc*/}
                <div className={'mt-4'}>
                    <p className={'text-md text-start font-light'}>Decorative iron grillwork paired with oversized
                        windows and an
                        antique mirror reveal the fully stocked bar and serve as the backdrop for the Desire bar.
                        Signature features like the tin ceiling and black and white checkered floors give depth to a
                        brand new contemporary bar, highboy tables, and state of the art chargrill station. The color
                        palette and design elements have been carefully curated to complement the existing materials
                        while creating a fresh look for the restaurant.
                        Desire Oyster Bar is the perfect setting to enjoy a great meal in the center of all the action
                        of the French Quarter.
                        Once we shuck 'em, we don't just chuck 'em! Desire Oyster Bar is honored to donate all used
                        oyster shells to the Coalition To Restore Coastal Louisiana’s Oyster Shell Recycling Program.
                        These recycled oyster shells are used to restore oyster reefs and shoreline habitat across
                        Coastal Louisiana.</p>
                </div>
                {/*Restaurant Desc*/}

                {/*Restaurant Images*/}
                <div>
                    <h1 className={'font-bold text-2xl mt-10 mb-7 border-b pb-5'}>5 Photos</h1>
                    <div className={'flex flex-wrap'}>
                        <img className={'w-56 h-44 mr-1 mb-1'}
                             src="https://resizer.otstatic.com/v2/photos/xlarge/1/27727864.jpg" alt=""/>
                        <img className={'w-56 h-44 mr-1 mb-1'}
                             src="https://resizer.otstatic.com/v2/photos/xlarge/1/27727870.jpg" alt=""/>
                        <img className={'w-56 h-44 mr-1 mb-1'}
                             src="https://resizer.otstatic.com/v2/photos/xlarge/1/27727868.jpg" alt=""/>
                        <img className={'w-56 h-44 mr-1 mb-1'}
                             src="https://resizer.otstatic.com/v2/photos/xlarge/1/27727869.jpg" alt=""/>
                        <img className={'w-56 h-44 mr-1 mb-1'}
                             src="https://resizer.otstatic.com/v2/photos/xlarge/1/31732300.jpg" alt=""/>
                    </div>
                </div>
                {/*Restaurant Images*/}
                <RestaurantReviews/>
            </div>

            <div className="w-[27%] relative text-reg">
                <ReservationCard/>
            </div>
        </div>
    );
};

export default RestaurantDescription;