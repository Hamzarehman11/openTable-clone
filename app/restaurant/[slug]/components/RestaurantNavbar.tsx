import Link from "next/link";


const RestaurantNavbar = () => {
    return (
        <nav className={'flex text-reg border-b pb-2'}>
            <Link className={'mr-7'} href={"/restaurant/bugerlab"}>Overview</Link>
            <Link className={'mr-7'} href={"/restaurant/bugerlab/menu"}>Menu</Link>
        </nav>
    );
};

export default RestaurantNavbar;