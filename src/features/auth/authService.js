import axios from "axios";
import { base_Url } from "../../utils/Baseurl";

const login = async (userData) => {
    const response = await axios.post(`${base_Url}user/admin-login`, userData);
    console.log(response);
}  


const authService = {
    login
}

export default authService