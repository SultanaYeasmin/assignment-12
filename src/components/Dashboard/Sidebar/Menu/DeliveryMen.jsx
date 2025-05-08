import React from 'react';
import { MdAssignmentTurnedIn, MdRateReview } from 'react-icons/md';
import Menu from './Menu';

const DeliveryMen = () => {
    return (
        <div>
            <div>
                <Menu menu="My Delivery List" path="my-delivery-list" icon={MdAssignmentTurnedIn}></Menu>
                <Menu menu="My reviews" path="my-reviews" icon={MdRateReview}></Menu>

            </div>
        </div>
    );
};

export default DeliveryMen;
//delivery-man-routes
