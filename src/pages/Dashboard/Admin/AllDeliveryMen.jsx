import { useQuery } from '@tanstack/react-query';
import React from 'react';
import DeliveryManDataRow from '../../../components/Dashboard/TableRows/DeliveryManDataRow';

const AllDeliveryMen = () => {
    const {user, loading} = useAuth();

    const {} = useQuery({
        queryKey:[],
        queryFn:async()=>{

        }

        
    })

    return (
       <div>
            <Helmet>
                <title> All Delivery Men | Dashboard</title>
            </Helmet>

            <div className='text-center my-10 text-blue-600'>
              All Delivery Men
            </div>
            <div className="overflow-x-auto p-5">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>SL#</th>
                            <th>Delivery Man's Name</th>
                            <th>Phone#</th>
                            <th>Delivered Parcels#</th>
                            <th>Average review</th>                       

                        </tr>
                    </thead>
                    <tbody>
                        {parcels &&

                            parcels.map((parcel, index) => (
                                <DeliveryManDataRow

                                    index={index}
                                    key={parcel._id}
                                    parcel={parcel}
                                />)

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllDeliveryMen;