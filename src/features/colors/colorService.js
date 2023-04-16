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

const colorService = {
    getColors,
    createcolor
}

export default colorService 