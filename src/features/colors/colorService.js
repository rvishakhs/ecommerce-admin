import axios from "axios";
import { base_Url } from "../../utils/Baseurl";
import { gettokenfromlocalstorage } from "../../utils/getToken";

const config = {
    headers: {
        'Authorization': `Bearer ${gettokenfromlocalstorage?.token}`,
        'Accept'       : 'application/json'
       }
}


// Fetching Existing colors 
const getColors = async ( ) => {
    const response = await axios.get(`${base_Url}color`);
    return response.data;
}  
// Create new colors
const createcolor = async (color) => {
    const response = await axios.post(`${base_Url}color`, color, config );

    return response.data;
}  
// Fetch existing color by id 

const fetchcolor = async (id) => {
    const response = await axios.get(`${base_Url}color/${id}`);

    return response.data;
}  
// update existing color with 

const updatecolor = async (data) => {
    const response = await axios.put(`${base_Url}color/${data.id}`, data.color, config);

    return response.data;
}  


const colorService = {
    getColors,
    createcolor,
    fetchcolor,
    updatecolor
}

export default colorService 