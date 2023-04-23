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



const couponService = {
    getcoupons,
    createcoupon,
    fetchcoupon
}

export default couponService 