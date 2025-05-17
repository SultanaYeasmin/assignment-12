import { Helmet } from "react-helmet-async";
import profileImage from "../../../assets/profile-cover.jpg"
import useRole from "../../../hooks/useRole";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { imageUpload, saveUserData } from "../../../api/utils";
import toast from "react-hot-toast";
import { useState } from "react";

const MyProfile = () => {

    const [role] = useRole()
    const { user, updateUserProfile, } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [photo, setPhoto] = useState(user?.photoURL)
    const handleUpdateProfile = async (event) => {
        event.preventDefault();
        
        const image = event.target.image.files[0];
        const photoUrl = await imageUpload(image);

        if (!image) {
            toast.error("Please upload an image!");
            return;
        }

        updateUserProfile(user?.displayName, photoUrl)
            .then(() => {
                // Profile updated!
                console.log(user);
               
                console.log("updated", user);
                axiosSecure.patch(`/user/profile/${user?.email}`, { image: photoUrl })
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            setPhoto(photoUrl)
                            toast.success("Profile Image successfully Updated!")
                        }
                    })


            }).catch((error) => {
                toast.error(error.message)
            });


    }
    return (
        <div className="flex items-center justify-center mt-5 ">
            <Helmet>
                <title>My Profile | Dashboard</title>
            </Helmet>

            <div className="card bg-base-100 w-96 shadow-md">
                <figure>
                    <img
                        src={profileImage}
                        alt="profile"
                        className="" />
                </figure>
                <div className="card-body">
                    <div className="flex justify-center">
                        <img
                            src={user?.photoURL}
                            alt="profile"
                            className="w-20 h-20 rounded-full" />
                    </div>
                    <h2 className="card-title flex justify-center">
                        {user?.displayName}
                        <div className="badge badge-primary">{role}</div>
                    </h2>
                    <p className="text-center text-sm"><span className="text-green-700 text-extrabold">Email:</span> {user?.email}</p>
                    {/* <div className="card-actions justify-center">
                        <div className="badge badge-outline"></div>
                        <div className="badge badge-outline"></div>
                   
                    </div> */}
                    <form className="card-body"
                        onSubmit={handleUpdateProfile}>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Update Profile Image
                                </span>
                            </label>
                            <input type="file"
                                name='image'
                                className="file-input  file-input-bordered" />
                        </div>


                        <div className="form-control mt-6">
                            <button
                                type='submit'
                                className="btn btn-primary ">Update</button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default MyProfile;