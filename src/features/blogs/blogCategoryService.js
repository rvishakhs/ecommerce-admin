import axios from "axios";
import { base_Url } from "../../utils/Baseurl";
import { gettokenfromlocalstorage } from "../../utils/getToken";

const config = {
    headers: {
        'Authorization': `Bearer ${gettokenfromlocalstorage?.token}`,
        'Accept'       : 'application/json'
       }
}



// Fetching existing blogs
const getBlogCategories = async ( ) => {
    const response = await axios.get(`${base_Url}blogcategory`);
    console.log(response.data);
    
    return response.data;
}  

// Creat a new blog category
const createblogCategory = async (category) => {
    const response = await axios.post(`${base_Url}blogcategory`, category, config );

    return response.data;
}  

const blogCategoryService = {
    getBlogCategories,
    createblogCategory
}

export default blogCategoryService 