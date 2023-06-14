import {Cuisine, Location} from "@prisma/client";


const SideBar = ({locations, cuisines}: { locations: Location[], cuisines: Cuisine[] }) => {

    const renderedLocations = locations.map((location) => {
        return <p key={location.id} className={'font-light text-reg capitalize'}>{location.name}</p>
    });

    const renderedCuisines = cuisines.map((cuisine) => {
        return <p key={cuisine.id} className={'font-light text-reg capitalize'}>{cuisine.name}</p>
    });

    return (
        <>
            <div className="border-b pb-4">
                <h1 className={'mb-2'}>Region</h1>
                {renderedLocations}
            </div>
            <div className="border-b pb-4">
                <h1 className={'mb-2'}>Cuisine</h1>
                {renderedCuisines}
            </div>
            <div className="mt-3 pb-4">
                <h1 className="mb-2">Price</h1>
                <div className="flex">
                    <button className="border rounded-l p-2 w-full text-reg font-light">
                        $
                    </button>
                    <button className="border-r border-t border-b  p-2 w-full text-reg font-light">
                        $$
                    </button>
                    <button className="border-r border-t border-b rounded-r p-2 w-full text-reg font-light">
                        $$$
                    </button>
                </div>
            </div>
        </>
    );
};

export default SideBar;