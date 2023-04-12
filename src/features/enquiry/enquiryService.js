import axios from "axios";
import { base_Url } from "../../utils/Baseurl";

const getEnquiry = async ( ) => {
    const response = await axios.get(`${base_Url}enquire`);
    console.log(response.data);
    
    return response.data;
}  


const enquiryService = {
    getEnquiry
}

export default enquiryService 