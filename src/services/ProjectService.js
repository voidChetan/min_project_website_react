import axios from "axios";
import * as myconstant from '../services/Constants'
const apiEndPoint = process.env.REACT_APP_API_KEY;

const GetProjectsForMainPage = async () => {
    try {
        const result = await axios.get(apiEndPoint + myconstant.GETPROJECTS_FORMAINPAGE);
        return result.data.data;
    } catch (error) {
        console.log(error);
    }
};

export { GetProjectsForMainPage };