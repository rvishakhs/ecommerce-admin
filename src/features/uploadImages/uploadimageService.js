import axios from "axios";
import { base_Url } from "../../utils/Baseurl";
import { gettokenfromlocalstorage } from "../../utils/getToken";

const config = {
    headers: {
        'Authorization': `Bearer ${gettokenfromlocalstorage?.token}`,
        'Accept'       : 'application/json'
       }
}
// Upload Image
const uploadImage = async (data) => {
    const response = await axios.post(`${base_Url}upload`,data ,config);
    return response.data;
}
// Delete image  
const deleteImage = async (id) => {
    const response = await axios.delete(`${base_Url}upload/${id}` ,config);
    return response.data;
}  


const imgUploadService = {
    uploadImage,
    deleteImage
}

export default imgUploadService 