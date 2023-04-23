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
    
    return response.data;
}  

// Creat a new blog category
const createblogCategory = async (category) => {
    const response = await axios.post(`${base_Url}blogcategory`, category, config );

    return response.data;
}

// Fetch existing blog category by id
const fetchblogcategory = async (id) => {
    const response = await axios.get(`${base_Url}blogcategory/${id}`,);

    return response.data;
}

// Update existing blog category using id
const updateblogcategory = async (data) => {
    const response = await axios.put(`${base_Url}blogcategory/${data.id}`,data.Data, config);

    return response.data;
}  

const blogCategoryService = {
    getBlogCategories,
    createblogCategory,
    fetchblogcategory,
    updateblogcategory
}

export default blogCategoryService 