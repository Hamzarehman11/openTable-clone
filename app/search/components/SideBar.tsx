const SideBar = () => {
    return (
        <>
            <div className="border-b pb-4">
                <h1 className={'mb-2'}>Region</h1>
                <p className={'font-light text-reg'}>Toronto</p>
                <p className={'font-light text-reg'}>Ottawa</p>
                <p className={'font-light text-reg'}>Montreal</p>
                <p className={'font-light text-reg'}>Hamilton</p>
                <p className={'font-light text-reg'}>Kingston</p>
                <p className={'font-light text-reg'}>Niagara</p>
            </div>
            <div className="border-b pb-4">
                <h1 className={'mb-2'}>Cuisine</h1>
                <p className={'font-light text-reg'}>Mexican</p>
                <p className={'font-light text-reg'}>Pakistani</p>
                <p className={'font-light text-reg'}>Chinese</p>
                <p className={'font-light text-reg'}>Indian</p>
                <p className={'font-light text-reg'}>American</p>
                <p className={'font-light text-reg'}>Thai</p>
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