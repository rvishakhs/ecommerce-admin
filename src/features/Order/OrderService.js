import axios from "axios";
import { base_Url } from "../../utils/Baseurl";

const gettokenfromlocalstorage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

const config = {
    headers: {
        'Authorization': `Bearer ${gettokenfromlocalstorage?.token}`,
        'Accept'       : 'application/json'
       }
}
// For fetching single all orders
const getAllOrders = async ( ) => {
    const response = await axios.get(`${base_Url}user/allorders`, config); 
    return response.data;
}  

// Route for fetching order by user

const getOrderByUser = async (id) => {
    const response = await axios.post(`${base_Url}user/getorderbyuser/${id}`, " " ,config); 
    return response.data;
}  


const orderService = {
    getAllOrders,
    getOrderByUser
}

export default orderService 