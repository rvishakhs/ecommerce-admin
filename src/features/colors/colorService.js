import axios from "axios";
import { base_Url } from "../../utils/Baseurl";

const getColors = async ( ) => {
    const response = await axios.get(`${base_Url}color`);
    return response.data;
}  


const colorService = {
    getColors
}

export default colorService 