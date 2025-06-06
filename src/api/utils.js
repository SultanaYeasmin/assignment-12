import axios from "axios";

export const imageUpload =async imageData =>{
    const formData = new FormData();
    formData.append('image', imageData)
    const {data} = await axios.post(
`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, formData

    )
    console.log(data.data)
    return data.data.display_url;
}

export const saveUserData = async (user, role, phone)=>{
    await axios.post(`${import.meta.env.VITE_API_URL}/users/${user?.email}`,{
    name: user?.displayName,
    phone: phone,
    image: user?.photoURL,
    email: user?.email,
    role: role || "User",
})
}





