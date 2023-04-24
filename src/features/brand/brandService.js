import axios from "axios";
import { base_Url } from "../../utils/Baseurl";
import { gettokenfromlocalstorage } from "../../utils/getToken";

const config = {
    headers: {
        'Authorization': `Bearer ${gettokenfromlocalstorage?.token}`,
        'Accept'       : 'application/json'
       }
}
// get all brands or fetching all brands 
const getBrands = async ( ) => {
    const response = await axios.get(`${base_Url}brand`);   
    return response.data;
}  

// Creating new brand 
const createBrand = async (brand) => {
    const response = await axios.post(`${base_Url}brand`, brand, config );

    return response.data;
}  

// Get a single brand
const getabrand = async (id) => {
    const response = await axios.get(`${base_Url}brand/${id}`, config );

    return response.data;
}  

// Updating a brand
const updatingBrand = async (brand) => {
    const response = await axios.put(`${base_Url}brand/${brand.id}`, brand.branddata, config );

    return response.data;
}  

// Deleting  a brand 
const deleteBrand = async (brand) => {
    const response = await axios.delete(`${base_Url}brand/${brand}`,config );

    return response.data;
}  



const brandService = {
    getBrands,
    createBrand,
    getabrand,
    updatingBrand,
    deleteBrand,
}

export default brandService 