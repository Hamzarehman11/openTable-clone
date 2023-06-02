const ReservationCard = () => {
    return (
        <div className="fixed bg-white rounded p-3 shadow w-[15%]">
            <div className="text-center border-b pb-2 font-bold">
                <h4 className="mr-7 text-lg">
                    Reservation Card
                </h4>
            </div>
            <div className="my-3 flex flex-col">
                <label htmlFor="">Party Size</label>
                <select className={'py-3 border-b font-light '} name="" id="">
                    <option value="">1 Person</option>
                    <option value="">2 People</option>
                </select>
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col w-[48%]">
                    <label htmlFor="">Date</label>
                    <input className={'py-3 border-b font-light w-28'} type="text"/>
                </div>
                <div className="flex flex-col w-[48%]">
                    <label htmlFor="">Time</label>
                    <select className={'py-3 border-b font-light w-28'} name={''} id={''}>
                        <option value="">7:30 PM</option>
                        <option value="">9:30 PM</option>
                    </select>
                </div>
            </div>
            <div className="mt-5">
                <button className={'bg-red-600 rounded w-full px-4 text-white font-bold h-16'}>Find Time</button>
            </div>
        </div>
    );
};

export default ReservationCard;