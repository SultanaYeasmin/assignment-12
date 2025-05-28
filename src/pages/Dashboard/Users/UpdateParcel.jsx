import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hooks/useAuth';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';

const UpdateParcel = () => {
    const { user } = useAuth();
    const [weight, setWeight] = useState(null);
    const [priceUpdated, setPriceUpdated] = useState(null);
    const { id } = useParams();
    console.log(id)
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const { data: parcelForUpdate = {}, isLoading, refetch } = useQuery({
        queryKey: ['parcelForUpdate', id],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/parcel/${id}`)
            return data;
        }


    })
      if (isLoading) return <LoadingSpinner />
    console.log("parcel for update details", parcelForUpdate)
    const { _id, name, email, phone_number, parcel_type, parcel_weight, price, receiver_name, receiver_phone_number, address, requested_delivery_date, latitude, longitude, status, delivery_man_ID, expected_delivery_date, booking_date } = parcelForUpdate || {}

    console.log(weight, "updated")

    const user_name = user?.displayName;
    const user_email = user?.email;

    const handleWeight = w => {
        if (isNaN(w) ||  w <= 0) {
            // setWeight(parcel_weight);
            // setPriceUpdated(price);
            return toast.error("Please enter valid weight!")
        }
        setWeight(w)
        if (w > 0 && w < 2) {
            setPriceUpdated(50)

        }
        else if (w == 2) {
            setPriceUpdated(100)

        }
        else if (w > 2) {
            setPriceUpdated(150)

        }
        else {
            setPriceUpdated(null)
        }



    }



    const handleUpdateBooking = async e => {
        e.preventDefault();

        const form = e.target;
        const phoneNumber = form.phoneNumber.value
        const parcelType = form.parcelType.value
        const parcelWeight = form.parcelWeight.value
        const receiverName = form.receiverName.value
        const receiverPhoneNumber = form.receiverPhoneNumber.value
        const address = form.address.value
        const requestedDeliveryDate = form.deliveryDate.value
        const latitude = form.latitude.value
        const longitude = form.longitude.value
        const bookingDate = new Date().toLocaleString();


        const updatedBooking = {
            name: user_name, email: user_email,
            phone_number: phoneNumber, parcel_type: parcelType,
            parcel_weight: weight ?? parcel_weight,
            price: priceUpdated ?? price,
            receiver_name: receiverName,
            receiver_phone_number: receiverPhoneNumber,
            address, requested_delivery_date: requestedDeliveryDate,
            latitude, longitude,
            status: 'Pending',
            booking_date: bookingDate
        }
        console.log(updatedBooking);
        axiosSecure.put(`/update-a-parcel/${_id}`, updatedBooking)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your booking has been added",
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate('/dashboard/my-Parcels');

                }
            })
    }

    return (
        <div className='text-gray-950 p-4'>
            <Helmet>
                <title>Update Parcel | Dashboard</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold">Update Parcel!</h1>
                        <p className="py-6 px-12">
                            Want to book a parcel ? Fill up the below form!
                        </p>
                    </div>
                    {/* <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"> */}
                    <div className="card w-full max-w-5xl">
                        <form onSubmit={handleUpdateBooking} className="card-body">
                            {/* name & mail */}
                            <div className='md:flex flex-col justify-between gap-4'>
                                <div className=''>
                                    <label className="form-control">
                                        <div className="label">
                                            <span className="label-text">Your name</span>
                                        </div>
                                        <input
                                            name="name"
                                            defaultValue={user_name}
                                            type="text" placeholder="Your name" className="input input-bordered w-full max-w-lg" readOnly />
                                    </label>
                                </div>
                                <div className=''>
                                    <label className="form-control">
                                        <div className="label">
                                            <span className="label-text">Your Email</span>
                                        </div>
                                        <input
                                            defaultValue={user_email}
                                            name="email" type="email" placeholder="email" className="input input-bordered w-full max-w-lg" readOnly />
                                    </label>
                                </div>
                            </div>

                            {/* phone number */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Phone Number</span>
                                </label>
                                <input
                                    defaultValue={phone_number}
                                    name="phoneNumber"
                                    type="tel" placeholder="Phone Number" className="input input-bordered" />
                            </div>

                            {/* parcel type and weight */}
                            <div className='md:flex justify-between gap-4'>
                                <div className='md:w-1/2'>
                                    <label className="form-control">
                                        <div className="label">
                                            <span className="label-text">Parcel Type</span>
                                        </div>
                                        <input
                                            defaultValue={parcel_type}
                                            name="parcelType"
                                            type="text"
                                            placeholder="Parcel Type" className="input input-bordered w-full max-w-lg" />
                                    </label>
                                </div>

                                <div className='md:w-1/2 '>
                                    <label className="form-control relative">
                                        <div className="label">
                                            <span className="label-text">Parcel Weight (Kg)</span>
                                        </div>
                                        <input
                                            value={weight !==null ? weight : parcel_weight}
                                            onChange={e => handleWeight(parseFloat(e.target.value))}
                                            name="parcelWeight"
                                            type="number"
                                            step="any"

                                            className="input input-bordered w-full max-w-lg">

                                        </input>

                                    </label>
                                 
                                </div>

                                {/* {!weight && <div className='md:w-1/2 '>
                                    <label className="form-control relative">
                                        <div className="label">
                                            <span className="label-text">Parcel Weight (Kg)</span>
                                        </div>
                                        <input 
                                            defaultValue={weight}
                                            onChange={e => handleWeight(parseFloat(e.target.value))}
                                            name="parcelWeight"
                                            type="number"
                                            step="any"
                                           
                                            className="input input-bordered w-full max-w-lg" >
                                                                                            
                                                </input> 
                                             {
                                                !weight && <p className='absolute mt-[20%] ml-[09%]'>{parcel_weight}</p>
                                             }
                                    </label>
                                   
                                </div>} */}
                            </div>
                            {/* Receiver */}
                            <div className='md:flex justify-between gap-4'>
                                <div className='md:w-1/2'>
                                    <label className="form-control">
                                        <div className="label">
                                            <span className="label-text">Receiver's Name</span>
                                        </div>
                                        <input
                                            defaultValue={receiver_name}
                                            name="receiverName"
                                            type="text"
                                            placeholder="Receiver's Name" className="input input-bordered w-full max-w-lg" />
                                    </label>
                                </div>
                                <div className='md:w-1/2'>
                                    <label className="form-control">
                                        <div className="label">
                                            <span className="label-text">Receiver's Phone Number</span>
                                        </div>
                                        <input
                                            defaultValue={receiver_phone_number}
                                            name="receiverPhoneNumber"
                                            type="text" placeholder="Receiver's Phone Number" className="input input-bordered w-full max-w-lg" />
                                    </label>
                                </div>
                            </div>
                            {/* Parcel Delivery Address */}
                            <div className='flex justify-between gap-4'>
                                <div className='w-full'>
                                    <label className="form-control">
                                        <div className="label">
                                            <span className="label-text">Parcel Delivery Address</span>
                                        </div>
                                        <textarea
                                            defaultValue={address}
                                            name="address"
                                            className="textarea textarea-bordered h-24" placeholder="Delivery Address" required></textarea>

                                    </label>
                                </div>

                            </div>

                            {/* Requested Delivery Date*/}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Requested Delivery Date</span>
                                </label>
                                <input
                                    defaultValue={requested_delivery_date}
                                    name="deliveryDate"
                                    type="date" placeholder="Requested Delivery Date" className="input input-bordered" />
                            </div>

                            {/*	Delivery Address Latitude (i.e 21.121365496) &	Delivery Address longitude (i.e 21.121365496) */}
                            <div className='md:flex  justify-between gap-4'>
                                <div className='md:w-1/2'>
                                    <label className="form-control">
                                        <div className="label">
                                            <span className="label-text">


                                                Delivery Address Latitude</span>
                                        </div>
                                        <input
                                            defaultValue={latitude}
                                            name="latitude" step="any"
                                            type="number" placeholder="Latitude" className="input input-bordered w-full max-w-lg" />
                                    </label>
                                </div>
                                <div className='md:w-1/2'>
                                    <label className="form-control">
                                        <div className="label">
                                            <span className="label-text">Delivery Address Longitude</span>
                                        </div>
                                        <input
                                            defaultValue={longitude}
                                            name="longitude"
                                            step="any"
                                            type="number" placeholder="Longitude" className="input input-bordered w-full max-w-lg" />
                                    </label>
                                </div>
                            </div>
                            {/* ●	PriceUpdated(Auto Calculated from the Parcel Weight Input. For 1 kg PriceUpdated is 50Tk, for 2 kg 100Tk, more than 2kg priceUpdated will be 150Tk) */}

                            {/* PriceUpdated */}
                            <div className="form-control">
                                <label className="label">
                                    <p>
                                        {priceUpdated ? <span className="label-text font-bold text-gray-500 text-lg">  Updated Price: {priceUpdated} </span>:
                                        <span className="label-text"> Price: Tk. {price}</span>}


                                    </p>
                                </label>

                            </div>

                            {/* ●	Parcel Delivery Address */}
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" >Update your parcel</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UpdateParcel;