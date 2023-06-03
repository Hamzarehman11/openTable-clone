import Header from "../components/Header";
import SideBar from "./components/SideBar";
import SearchRestaurantCard from "./components/SearchRestaurantCard";


const Search = () => {
    return (

        <>
            <Header/>
            <div className={'flex py-4 m-auto w-2/3 justify-between items-start'}>
                <div className="w-1/5">
                    <SideBar/>
                </div>
                <div className="w-5/6">
                    <SearchRestaurantCard/>
                </div>
            </div>
        </>

    )
        ;
};

export default Search;