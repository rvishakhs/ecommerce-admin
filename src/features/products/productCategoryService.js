import axios from "axios";
import { base_Url } from "../../utils/Baseurl";
import { gettokenfromlocalstorage } from "../../utils/getToken";

const config = {
    headers: {
        'Authorization': `Bearer ${gettokenfromlocalstorage?.token}`,
        'Accept'       : 'application/json'
       }
}

// Fetching all product Categories
const getProdCategories = async ( ) => {
    const response = await axios.get(`${base_Url}category`);
    return response.data;
}  

// Creating a new Product Category
const createProdCategory = async (ProdCategory) => {
    const response = await axios.post(`${base_Url}category`, ProdCategory, config );
    return response.data;
}  




const productCategoryService = {
    getProdCategories,
    createProdCategory
}

export default productCategoryService 