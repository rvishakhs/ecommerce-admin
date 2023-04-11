import axios from "axios";
import { base_Url } from "../../utils/Baseurl";

const getBlogs = async ( ) => {
    const response = await axios.get(`${base_Url}blog`);
    console.log(response.data);
    
    return response.data;
}  


const blogService = {
    getBlogs
}

export default blogService 