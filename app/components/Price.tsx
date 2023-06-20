import {PRICE} from "@prisma/client";

const Price = ({price}: { price: PRICE }) => {


    const priceRange = () => {
        if (price === 'CHEAP') {
            return (
                <>
                    <span className={'text-black font-bold'}>$</span>
                    <span className={'mr-3 text-gray-500'}>$$$</span>
                </>
            )
        } else if (price === 'REGULAR') {
            return (
                <>
                    <span className={'text-black font-bold'}>$$</span>
                    <span className={'mr-3 text-gray-500'}>$$</span>
                </>
            )
        } else {
            return (
                <>
                    <span className={'mr-3 text-black font-bold'}>$$$$</span>
                </>
            )
        }
    }

    return (
        <>
            {priceRange()}
        </>
    );
};

export default Price;