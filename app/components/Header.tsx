const Header = () => {
    return (
        <main>
            <div className={'h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2'}>
                <div className={'text-center mt-10'}>
                    <h3 className={'text-white text-4xl font-bold mb-2'}>Find your table for any occasion</h3>

                    {/*search bar*/}
                    <div className={'text-left text-lg py-3 m-auto flex justify-center'}>
                        <input className={'rounded mr-3 p-2 w-[450px]'} type="text" placeholder={'State,city or town'}/>
                        <button className={'bg-red-600 px-9 py-2 text-white rounded'}>Let's go</button>
                    </div>
                    {/*search bar*/}
                    
                </div>
            </div>
        </main>
    );
};

export default Header;