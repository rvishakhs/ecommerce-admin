import axios from "axios";
import { base_Url } from "../../utils/Baseurl";
import { gettokenfromlocalstorage } from "../../utils/getToken";

// const config = {
//     headers: {
//         'Authorization': `Bearer ${gettokenfromlocalstorage?.token}`,
//         'Accept'       : 'application/json'
//        }
// }

// Get product 
const getProducts = async ( ) => {
    const response = await axios.get(`${base_Url}product`);
    return response.data;
}  



const productService = {
    getProducts,
}

export default productService 