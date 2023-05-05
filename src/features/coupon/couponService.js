import axios from "axios";
import { base_Url } from "../../utils/Baseurl";
import { gettokenfromlocalstorage } from "../../utils/getToken";

const config = {
    headers: {
        'Authorization': `Bearer ${gettokenfromlocalstorage?.token}`,
        'Accept'       : 'application/json'
       }
}
// get all coupons or fetching all coupons 
const getcoupons = async ( ) => {
    const response = await axios.get(`${base_Url}coupon`);   
    return response.data;
}  

// Creating new coupon 
const createcoupon = async (coupon) => {
    const response = await axios.post(`${base_Url}coupon`, coupon, config );

    return response.data;
}  


// fetch single coupon
const fetchcoupon = async (id) => {
    const response = await axios.get(`${base_Url}coupon/${id}`,);

    return response.data;
}  

// Update Coupon request

const updateCoupon = async (data) => {
    const response = await axios.put(`${base_Url}coupon/${data.id}`,data.data, config);

    return response.data;
}  

// Delete couppon 

const deletecoupon = async (id) => {
    const response = await axios.delete(`${base_Url}coupon/${id}`, config);

    return response.data;
}  



const couponService = {
    getcoupons,
    createcoupon,
    fetchcoupon,
    deletecoupon,
    updateCoupon,
}

export default couponService 