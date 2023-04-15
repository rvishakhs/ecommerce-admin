import axios from "axios";
import { base_Url } from "../../utils/Baseurl";
import { gettokenfromlocalstorage } from "../../utils/getToken";

const config = {
    headers: {
        'Authorization': `Bearer ${gettokenfromlocalstorage?.token}`,
        'Accept'       : 'application/json'
       }
}


const uploadImage = async (data) => {
    const response = await axios.post(`${base_Url}upload`,data ,config);
    console.log(response.data);
    
    return response.data;
}  


const imgUploadService = {
    uploadImage
}

export default imgUploadService 