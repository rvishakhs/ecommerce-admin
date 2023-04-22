import axios from "axios";
import { base_Url } from "../../utils/Baseurl";
import { gettokenfromlocalstorage } from "../../utils/getToken";

const config = {
    headers: {
        'Authorization': `Bearer ${gettokenfromlocalstorage?.token}`,
        'Accept'       : 'application/json'
       }
}

// For getting all blogs

const getBlogs = async ( ) => {
    const response = await axios.get(`${base_Url}blog`);
    
    return response.data;
}  

// For creating a new blog

const createBlog = async (blogs) => {
    const response = await axios.post(`${base_Url}blog/createblog`, blogs, config );
    return response.data;
}

const blogService = {
    getBlogs,
    createBlog
}

export default blogService 