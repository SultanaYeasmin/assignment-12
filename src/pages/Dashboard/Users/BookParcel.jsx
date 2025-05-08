import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hooks/useAuth';

const BookParcel = () => {
    const { user } = useAuth();
    const user_name = user?.displayName;
    const user_email = user?.email;

    const handleBooking = async e => {
        e.preventDefault();
        const form = e.target;
        const phoneNumber = form.phoneNumber.value
        const parcelType = form.parcelType.value
        const parcelWeight = form.parcelWeight.value
        const user_image = user?.photoURL;
        const query_date = new Date().toLocaleString()
    }

    return (
        <div className='text-gray-950 p-4'>
            <Helmet>
                <title>Booking parcels | Dashboard</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold">Book a Parcel!</h1>
                        <p className="py-6 px-12">
                            Want to book a parcel ? Fill up the below form!
                        </p>
                    </div>
                    {/* <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"> */}
                    <div className="card w-full max-w-2xl">
                        <form onSubmit={handleBooking} className="card-body">
                            {/* name & mail */}
                            <div className='md:flex justify-between gap-4'>
                                <div className='md:w-1/2'>
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
                                <div className='md:w-1/2'>
                                    <label className="form-control">
                                        <div className="label">
                                            <span className="label-text">Your Email</span>
                                        </div>
                                        <input
                                         defaultValue={user_email}
                                            name="email" type="email" placeholder="email" className="input input-bordered w-full max-w-lg" readOnly  />
                                    </label>
                                </div>
                            </div>

                            {/* phone number */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Phone Number</span>
                                </label>
                                <input
                                    name="phoneNumber"
                                    type="text" placeholder="Phone Number" className="input input-bordered" required />
                            </div>

                            {/* parcel type and weight */}
                            <div className='md:flex justify-between gap-4'>
                                <div className='md:w-1/2'>
                                    <label className="form-control">
                                        <div className="label">
                                            <span className="label-text">Parcel Type</span>
                                        </div>
                                        <input name="parcelType"
                                            type="text"
                                            placeholder="Parcel Type" className="input input-bordered w-full max-w-lg" />
                                    </label>
                                </div>
                                <div className='md:w-1/2'>
                                    <label className="form-control">
                                        <div className="label">
                                            <span className="label-text">Parcel Weight</span>
                                        </div>
                                        <input
                                            name="parcelWeight"
                                            type="text"
                                            placeholder="Parcel Weight" className="input input-bordered w-full max-w-lg" required />
                                    </label>
                                </div>
                            </div>
                            {/* Receiver */}
                            <div className='md:flex justify-between gap-4'>
                                <div className='md:w-1/2'>
                                    <label className="form-control">
                                        <div className="label">
                                            <span className="label-text">Receiver's Name</span>
                                        </div>
                                        <input name="receiverName"
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
                                            name="receiverPhoneNumber"
                                            type="text" placeholder="Receiver's Phone Number" className="input input-bordered w-full max-w-lg" required />
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
                                            name="address"
                                            className="textarea textarea-bordered h-24" placeholder="Delivery Address"></textarea>

                                    </label>
                                </div>

                            </div>

                            {/* Requested Delivery Date*/}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Requested Delivery Date</span>
                                </label>
                                <input
                                    name="deliveryDate" type="date" placeholder="Requested Delivery Date" className="input input-bordered" required />
                            </div>



                            {/*	Delivery Address Latitude (i.e 21.121365496) &	Delivery Address longitude (i.e 21.121365496) */}
                            <div className='md:flex  justify-between gap-4'>
                                <div className='md:w-1/2'>
                                    <label className="form-control">
                                        <div className="label">
                                            <span className="label-text">Delivery Address Latitude</span>
                                        </div>
                                        <input
                                            name="latitude" type="text" placeholder="Latitude" className="input input-bordered w-full max-w-lg" />
                                    </label>
                                </div>
                                <div className='md:w-1/2'>
                                    <label className="form-control">
                                        <div className="label">
                                            <span className="label-text">Delivery Address Longitude</span>
                                        </div>
                                        <input
                                            name="longitude" type="text" placeholder="Longitude" className="input input-bordered w-full max-w-lg" required />
                                    </label>
                                </div>
                            </div>
                            {/* ●	Price(Auto Calculated from the Parcel Weight Input. For 1 kg Price is 50Tk, for 2 kg 100Tk, more than 2kg price will be 150Tk) */}

                            {/* Price */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price: Tk. {50}</span>
                                </label>

                            </div>

                            {/* ●	Parcel Delivery Address */}
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Book your parcel</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookParcel;