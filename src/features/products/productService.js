import axios from "axios";
import { base_Url } from "../../utils/Baseurl";
import { gettokenfromlocalstorage } from "../../utils/getToken";

const config = {
    headers: {
        'Authorization': `Bearer ${gettokenfromlocalstorage?.token}`,
        'Accept'       : 'application/json'
       }
}

// Get product 
const getProducts = async ( ) => {
    const response = await axios.get(`${base_Url}product`);
    return response.data;
}  

// Create product 
const createProduct = async (values) => {
    const response = await axios.post(`${base_Url}product/create`, values, config );

    return response.data;
}

// Delete prodduct axios request

const deleteProducts = async (id) => {
    const response = await axios.delete(`${base_Url}product/${id}`, config);
    return response.data;
}  

const productService = {
    getProducts,
    createProduct,
    deleteProducts,
}

export default productService 