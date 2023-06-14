import MenuCard from "./MenuCard";
import { Item } from '@prisma/client';

const MenuSec = ({ menu }:{ menu: Item[] }) => {


    const menuItem = menu.map((item)=>{
        return (
            <MenuCard key={item.id} item={item}/>
        )
    })

    return (
        <main className="bg-white mt-5">
            <div>
                <div className="mt-4 pb-1 mb-1">
                    <h1 className="font-bold text-3xl">Menu</h1>
                </div>
                <div className="flex flex-wrap justify-between">
                    {menu.length ? menuItem : 'This restaurant does not have any menu'}
                </div>
            </div>
        </main>
    );
};

export default MenuSec;