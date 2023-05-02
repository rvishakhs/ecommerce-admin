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

// Fetching blog data 
const fetchBlog = async (id) => {
    const response = await axios.get(`${base_Url}blog/${id}`, );
    return response.data;
}

// Updating Existing Blog using Id

const updateBlog = async (body) => {
    const response = await axios.put(`${base_Url}blog/updateblog/${body.id}`, body.data, config );

    return response.data;   
}




// Deleting Blog with id

const deleteBlog = async (id) => {
    const response = await axios.delete(`${base_Url}blog/${id}`, config);
    
    return response.data;
} 

const blogService = {
    getBlogs,
    createBlog,
    deleteBlog,
    fetchBlog,
    updateBlog
}

export default blogService 