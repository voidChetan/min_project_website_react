import axios from "axios";
import * as myconstant from '../services/Constants'
const apiEndPoint = process.env.REACT_APP_API_KEY;

const AddQuries = async (obj) => {
    try {
        const result = await axios.post(apiEndPoint + myconstant.Add_QURIES,obj);
        return result.data;
    } catch (error) {
        console.log(error);
    }
};
const getAllQueries = async () => {
    const result = await axios.get (apiEndPoint+ myconstant.GET_ALL_QURIES);
    return result.data
}



const showQueryList = async () => {
    const result = await axios.get(apiEndPoint + myconstant.GET_ALL_QURIES);
    return result.data.data
}
export {showQueryList,AddQuries,getAllQueries}
