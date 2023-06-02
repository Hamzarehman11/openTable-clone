import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SideBar from "./components/SideBar";
import SearchRestaurantCard from "./components/SearchRestaurantCard";


const Search = () => {
    return (
        <main className={'bg-gray-200 w-screen min-h-screen '}>
            <main className={'bg-white max-w-screen-2xl m-auto'}>
                <Navbar/>
                <Header/>
                <div className={'flex py-4 m-auto w-2/3 justify-between items-start'}>
                    <div className="w-1/5">
                        <SideBar/>
                    </div>
                    <div className="w-5/6">
                      <SearchRestaurantCard />
                    </div>
                </div>
            </main>
        </main>
    );
};

export default Search;