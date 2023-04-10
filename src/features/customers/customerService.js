import axios from "axios";
import { base_Url } from "../../utils/Baseurl";

const getusers = async ( ) => {
    const response = await axios.get(`${base_Url}user/users`);
    console.log(response.data);

}  


const customerService = {
    getusers
}

export default customerService 