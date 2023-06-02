const RestaurantReviews = () => {
    return (
        <div>
            <h1 className={'font-bold text-2xl mt-10 mb-7 border-b pb-5'}>
                What 100 people are saying
            </h1>
            {/*Review Card*/}
            <div>
                <div className="border-b pb-7 mb-7">
                    <div className="flex">
                        <div className="w-1/6 flex flex-col items-center">
                            <div
                                className="rounded-full bg-blue-500 w-16 h-16 flex items-center justify-center">
                                <h2 className="text-white text-2xl">
                                    HR
                                </h2>
                            </div>
                            <p className={'font-bold text-sm mt-1 text-center'}>Hamza Rehman</p>
                        </div>
                        <div className={'flex flex-col ml-3 justify-center w-5/6'}>
                            <p>******</p>
                            <div>
                                <p>Good food but a bit overpriced. Service was good but the ambiance is just
                                    okay. It's a hotel restaurant so all of that is kind of expected. But a
                                    decent place for a meal overall.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Review Card*/}
        </div>
    );
};

export default RestaurantReviews;