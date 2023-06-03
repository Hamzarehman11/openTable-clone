const ReservationHeader = () => {
    return (
        <div>
            <h1 className="font-bold">You are almost done !</h1>
            <div className="mt-5 flex">
                <img className={'w-32 h-18 rounded'} src="https://resizer.otstatic.com/v2/photos/xlarge/2/48577378.png"
                     alt="restaurant image"/>
                <div className="ml-4">
                    <h1 className={'text-3xl font-bold'}>Burger Lab Restaurant</h1>
                    <div className="flex mt-3">
                        <p className="mr-6">Thursday,22,2023</p>
                        <p className="mr-6">7:30 PM</p>
                        <p className="mr-6">3 people</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ReservationHeader;