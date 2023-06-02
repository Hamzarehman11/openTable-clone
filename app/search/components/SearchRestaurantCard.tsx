import Link from "next/link";

const SearchRestaurantCard = () => {
    return (
        <div className={'border-b flex pb-5'}>
            <img className={'w-44 rounded'} src="https://resizer.otstatic.com/v2/photos/xlarge/1/30506553.webp"
                 alt="restaurant picture"/>
            <div className="pl-5">
                <h2 className="text-2xl font-bold">Burger Lab</h2>
                <div className="flex items-start mt-2">
                    <div className="flex mb-2">*****</div>
                    <p className="ml-2 text-sm">Awesome</p>
                </div>
                <div className="mb-9">
                    <div className="font-light flex text-reg">
                        <p className="mr-4">$$$</p>
                        <p className="mr-4">Mexican</p>
                        <p className="mr-4">Lahore</p>
                    </div>
                </div>
                <div>
                    <Link className={'text-red-600'} href={'/restaurant/burgerlab'}>View More Information</Link>
                </div>
            </div>

        </div>
    );
};

export default SearchRestaurantCard;