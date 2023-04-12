import axios from "axios";
import { base_Url } from "../../utils/Baseurl";

const getProdCategories = async ( ) => {
    const response = await axios.get(`${base_Url}category`);
    console.log(response.data);
    
    return response.data;
}  


const productCategoryService = {
    getProdCategories
}

export default productCategoryService 