import {Cuisine, Location, PRICE} from "@prisma/client";
import Link from "next/link";


const SideBar = ({
                     locations,
                     cuisines,
                     searchParams
                 }: { locations: Location[], cuisines: Cuisine[], searchParams: { city: string, cuisine?: string, price?: PRICE } }) => {

    const renderedLocations = locations.map((location) => {
        return <Link href={{
            pathname: '/search',
            query: {
                ...searchParams,
                city: location.name,
            }
        }} key={location.id} className={'font-light text-reg capitalize'}>{location.name}</Link>
    });

    const renderedCuisines = cuisines.map((cuisine) => {
        return <Link href={{
            pathname: '/search',
            query: {
                ...searchParams,
                cuisine: cuisine.name,
            }
        }} key={cuisine.id} className={'font-light text-reg capitalize'}>{cuisine.name}</Link>
    });


    const prices = [{
        price: PRICE.CHEAP,
        label: '$',
        className: 'border rounded-l text-center p-2 w-full text-reg font-light'
    },
        {price: PRICE.REGULAR, label: '$$', className: 'border  p-2 text-center w-full text-reg font-light'},
        {price: PRICE.EXPENSIVE, label: '$$$', className: 'border rounded-r text-center p-2 w-full text-reg font-light'}
    ].map(({price, label, className}) => {
        return (
            <Link href={{
                pathname: '/search',
                query: {
                    ...searchParams,
                    price: price,
                }
            }} className={className}>
                {label}
            </Link>
        )
    })

    return (
        <>
            <div className="border-b pb-4 flex flex-col">
                <h1 className={'mb-2'}>Region</h1>
                {renderedLocations}
            </div>
            <div className="border-b pb-4 flex flex-col">
                <h1 className={'mb-2'}>Cuisine</h1>
                {renderedCuisines}
            </div>
            <div className="mt-3 pb-4">
                <h1 className="mb-2">Price</h1>
                <div className="flex">
                    {prices}
                </div>
            </div>
        </>
    );
};

export default SideBar;