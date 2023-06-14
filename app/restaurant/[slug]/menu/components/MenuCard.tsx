

const MenuCard = ({ item }:{item:any}) => {
    return (

        <div className="border rounded p-3 mb-3 w-[49%]">
            <h3 className="font-bold text-md">{item.name}</h3>
            <p className="font-light mt-1 text-sm">{item.description}</p>
            <p className="mt-7">{item.price}</p>
        </div>


    );
};

export default MenuCard;