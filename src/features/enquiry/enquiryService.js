import axios from "axios";
import { base_Url } from "../../utils/Baseurl";
import { gettokenfromlocalstorage } from "../../utils/getToken";

const config = {
    headers: {
        'Authorization': `Bearer ${gettokenfromlocalstorage?.token}`,
        'Accept'       : 'application/json'
       }
}


// Get all enquiries
const getEnquiry = async ( ) => {
    const response = await axios.get(`${base_Url}enquire`);
    
    return response.data;
}  

// For Deleting single enquiry

const deleteEnquiry = async (id) => {
    const response = await axios.delete(`${base_Url}enquire/${id}`,config );
    
    return response.data;
}  

const enquiryService = {
    getEnquiry,
    deleteEnquiry,
}

export default enquiryService 