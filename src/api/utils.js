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







// curl --location --request POST "https://api.imgbb.com/1/upload?expiration=600&key=YOUR_CLIENT_API_KEY" --form "image=R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"