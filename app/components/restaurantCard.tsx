import Link from "next/link";

const RestaurantCard = () => {


    return (
        <Link href={'/restaurant/bugerlab'}>
            <main>
                <div className={'py-3 px-36 mt-10 flex flex-wrap'}>
                    <div className={'w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer'}>
                        <img className={'w-full h-36'}
                             src="https://resizer.otstatic.com/v2/photos/wide-huge/3/26429468.jpg"
                             alt="restaurant-img"/>
                        <div className={'p-1'}>
                            <h3 className={'font-bold text-2xl mb-2'}>Burger Lab</h3>
                            <div className={'flex flex-start'}>
                                <div className={'flex mb-2'}>
                                    *****
                                </div>
                                <p className={'ml-2'}>122 reviews</p>
                            </div>
                            <div className={'flex text-reg font-light capitalize'}>
                                <p className={'mr-3'}>English</p>
                                <p className={'mr-3'}>$$$</p>
                                <p>Lahore</p>
                            </div>
                            <p className={'text-sm mt-2 font-bold'}>Booked 4 time today</p>
                        </div>
                    </div>
                </div>
            </main>
        </Link>
    );
};

export default RestaurantCard;