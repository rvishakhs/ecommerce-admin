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

// For getting single enquiry

const getsingleEnquiry = async (id) => {
    const response = await axios.get(`${base_Url}enquire/${id}`);
    
    return response.data;
}  

// For updating enquiry Status

const updateEnquiry = async (enq) => {
    const response = await axios.put(`${base_Url}enquire/${enq.id}`, {enqStatus : enq.data} ,config);
    
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
    getsingleEnquiry,
    updateEnquiry,
}

export default enquiryService 