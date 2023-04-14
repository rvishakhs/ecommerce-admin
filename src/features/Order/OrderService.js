import axios from "axios";
import { base_Url } from "../../utils/Baseurl";

const gettokenfromlocalstorage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

const config = {
    headers: {
        'Authorization': `Bearer ${gettokenfromlocalstorage?.token}`,
        'Accept'       : 'application/json'
       }
}

const getAllOrders = async ( ) => {
    const response = await axios.get(`${base_Url}user/allorders`, config);
    
    return response.data;
}  


const orderService = {
    getAllOrders
}

export default orderService 