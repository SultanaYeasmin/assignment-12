import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const MyReviewCard = ({ review }) => {
 
    const {
        user_name,
        user_photoUrl,
        delivery_man_ID,
        rating,
        feedback,
        reviewDate,
    } = review;
    console.log(typeof rating)
    return (
        <div className="card bg-base-100 w-full shadow-2xl">
            <div className="card-body">
                <div className="card-title">
                    <div><img className="w-14 h-14 rounded-full" src={user_photoUrl} alt="user" /></div>
                    <div>
                        <p>{user_name}</p>
                        <div className="text-xs text-gray-400">{reviewDate}</div>


                    </div>

                </div>
            <hr className="my-2"/>

                <p className="mt-2 text-gray-600">{feedback}</p>
                <div className="card-actions justify-start mt-3">

                    <Rating
                        style={{ maxWidth: 180 }}
                        value={rating}
                        readOnly
                    />


                </div>
            </div>
        </div>
    );
};

export default MyReviewCard;