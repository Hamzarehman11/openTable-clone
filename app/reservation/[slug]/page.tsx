import ReservationHeader from "./components/ReservationHeader";
import ReservationForm from "./components/ReservationForm";


const ReservationPage = () => {
    return (

        <div className={'border-t  h-screen'}>
            <div className="py-9 w-3/5 m-auto">
                <ReservationHeader/>
                <ReservationForm/>
            </div>
        </div>

    );
};

export default ReservationPage;