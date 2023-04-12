import axios from "axios";
import { base_Url } from "../../utils/Baseurl";

const getBlogCategories = async ( ) => {
    const response = await axios.get(`${base_Url}blogcategory`);
    console.log(response.data);
    
    return response.data;
}  


const blogCategoryService = {
    getBlogCategories
}

export default blogCategoryService 