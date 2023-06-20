import {Location, Review} from "@prisma/client";
import Rating from "../../../components/Rating";


interface RestaurantType {
    id: number,
    name: string,
    images: string[],
    description: string,
    slug: string,
    location: Location,
    reviews: Review[]
}

const RestaurantReviews = ({reviews, restaurant}: { reviews: Review[], restaurant: RestaurantType }) => {


    const renderReview = reviews.map((review) => {

        const getInitials = (firstName: string, lastName: string) => {
            const firstNameIn = firstName.charAt(0).toUpperCase()
            const lastNameIn = lastName.charAt(0).toUpperCase()
            return firstNameIn + lastNameIn
        }

        return (
            <div>
                <div className="border-b pb-7 mb-7">
                    <div className="flex">
                        <div className="w-1/6 flex flex-col items-center">
                            <div
                                className="rounded-full bg-blue-500 w-16 h-16 flex items-center justify-center">
                                <h2 className="text-white text-2xl">
                                    {getInitials(review.first_name, review.last_name)}
                                </h2>
                            </div>
                            <p className={'font-bold text-sm mt-1 text-center'}>{review.first_name} {review.last_name}</p>
                        </div>
                        <div className={'flex flex-col ml-3 justify-center w-5/6'}>
                            <Rating rating={restaurant.reviews}/>
                            <div>
                                <p>{review.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })


    return (
        <div>
            <h1 className={'font-bold text-2xl mt-10 mb-7 border-b pb-5'}>
                What {reviews.length} {reviews.length === 1 ? 'person is ' : 'people are '} saying
            </h1>
            {/*Review Card*/}
            {reviews.length !== 0 ? renderReview : 'There are no reviews for this restaurant yet!'}
            {/*Review Card*/}
        </div>
    );
};

export default RestaurantReviews;