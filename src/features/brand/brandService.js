import axios from "axios";
import { base_Url } from "../../utils/Baseurl";

const getBrands = async ( ) => {
    const response = await axios.get(`${base_Url}brand`);
    
    return response.data;
}  


const brandService = {
    getBrands
}

export default brandService 