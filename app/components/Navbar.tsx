import Link from "next/link";

const Navbar = () => {

    return (
        <div>
            <nav className="bg-white">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className=" sm:items-stretch sm:justify-start">
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex">
                                    <Link href={"/"}
                                       className="font-bold text-2xl text-black font-medium"
                                       aria-current="page">OpenTable</Link>
                                </div>
                            </div>
                        </div>
                        <div
                            className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <p className="p-2">Sign Up</p>
                            <div className="relative ml-3">
                                <div>
                                    <button className="rounded rounded-1xl bg-blue-500 text-white px-4 py-2">Sign In
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <Link href={""} className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                           aria-current="page">OpenTable</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;