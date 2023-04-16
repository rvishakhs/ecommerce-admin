
import axios from "axios";
import { base_Url } from "../../utils/Baseurl";
import { gettokenfromlocalstorage } from "../../utils/getToken";

const config = {
    headers: {
        'Authorization': `Bearer ${gettokenfromlocalstorage?.token}`,
        'Accept'       : 'application/json'
       }
}



// Create product

const createProduct = async (values) => {
    const response = await axios.post(`${base_Url}product/create`, values, config );
    console.log(response);

    return response.data;
}  

const productCreateService = {

    createProduct
}

export default productCreateService 
