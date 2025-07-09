import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hooks/useAuth';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import MapView from '../../../components/Dashboard/MapView/MapView';



const BookParcel = () => {
    // const [latitude, setLatitude] = useState(22.58)
    // const [longitude, setLongitude] = useState(89.31)
    const { user } = useAuth();
    const [weight, setWeight] = useState(null);
    const [price, setPrice] = useState(null);

    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    console.log(weight)

    const user_name = user?.displayName;
    const user_email = user?.email;

    const handleWeight = w => {
        if (isNaN(w) || !w || w <= 0) {
            setWeight(null);
            setPrice(null);
            return toast.error("Please enter weight of parcel!")
        }
        setWeight(w)
        if (w > 0 && w < 2) {
            setPrice(50)

        }
        else if (w == 2) {
            setPrice(100)

        }
        else if (w > 2) {
            setPrice(150)

        }
        else {
            setPrice(null)
        }



    }



    const handleBooking = async e => {
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
        const bookingDate = new Date().toISOString().split("T")[0];


        const newBooking = {
            name: user_name, email: user_email,
            phone_number: phoneNumber, parcel_type: parcelType,
            parcel_weight: parcelWeight,
            price,
            receiver_name: receiverName,
            receiver_phone_number: receiverPhoneNumber,
            address, requested_delivery_date: requestedDeliveryDate,
            latitude, longitude,
            status: 'Pending',
            booking_date: bookingDate
        }
        console.log(newBooking);
        axiosSecure.post('/book-a-parcel', newBooking)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your booking has been added",
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate('/dashboard/my-Parcels');
                    form.reset();
                }
            })
    }

    return (
        <div className='text-gray-950 p-4'>
            <Helmet>
                <title>Booking | Dashboard</title>
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
                    <div className="card w-full max-w-5xl">
                        <form onSubmit={handleBooking} className="card-body">
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
                                    name="phoneNumber"
                                    type="tel" placeholder="Phone Number" className="input input-bordered" required />
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
                                            placeholder="Parcel Type" className="input input-bordered w-full max-w-lg" required />
                                    </label>
                                </div>
                                <div className='md:w-1/2'>
                                    <label className="form-control">
                                        <div className="label">
                                            <span className="label-text">Parcel Weight (Kg)</span>
                                        </div>
                                        <input
                                            value={weight || ''}
                                            onChange={e => handleWeight(parseFloat(e.target.value))}
                                            name="parcelWeight"
                                            type="number"
                                            step="any"
                                            placeholder="Parcel Weight"
                                            className="input input-bordered w-full max-w-lg" required />
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
                                            placeholder="Receiver's Name" className="input input-bordered w-full max-w-lg" required />
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
                                    name="deliveryDate"
                                    type="date" placeholder="Requested Delivery Date" className="input input-bordered" required />
                            </div>

                            {/*	Delivery Address Latitude (i.e 21.121365496) &	Delivery Address longitude (i.e 21.121365496) */}
                            <div>
                                <MapView
                                    latitude={latitude} longitude={longitude}
                                    setLatitude={setLatitude} setLongitude={setLongitude} /> </div>
                            <div className='flex justify-between gap-4'>
                                <div className='w-full'>
                                    <label className="form-control">
                                        <div className="label">
                                            <span className="label-text"> Delivery Address Latitude</span>
                                        </div>
                                        <input name="latitude"
                                            type="text"
                                            value={latitude || ''} className="input input-bordered w-full max-w-lg"
                                            onChange={(e) => setLatitude(parseFloat(e.target.value))}
                                            required />
                                    </label>
                                </div>
                                <div className='w-full'>
                                    <label className="form-control">
                                        <div className="label">
                                            <span className="label-text">Delivery Address Longitude</span>
                                        </div>
                                        <input name="longitude"
                                            type="text"
                                            onChange={(e) => setLongitude(parseFloat(e.target.value))}
                                            value={longitude || ''} className="input input-bordered w-full max-w-lg" required />
                                    </label>
                                </div>

                            </div>



                            {/* ●	Price(Auto Calculated from the Parcel Weight Input. For 1 kg Price is 50Tk, for 2 kg 100Tk, more than 2kg price will be 150Tk) */}

                            {/* Price */}
                            <div className="form-control">
                                <label className="label">
                                    {weight ? <span className="label-text">Price: Tk. {price}</span>

                                        : <span className="label-text">Price:  <span className='font-bold text-red-500 text-lg'>Please enter valid weight!</span> </span>}
                                </label>

                            </div>

                            {/* ●	Parcel Delivery Address */}
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" disabled={!price}>Book your parcel</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookParcel;
