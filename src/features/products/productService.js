import axios from "axios";
import { base_Url } from "../../utils/Baseurl";

const getProducts = async ( ) => {
    const response = await axios.get(`${base_Url}product`);
    console.log(response.data);
    
    return response.data;
}  


const productService = {
    getProducts
}

export default productService 