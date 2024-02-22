import axios from 'axios';
import * as Constant from "./Constants"
const ApiUrl = process.env.REACT_APP_API_KEY;

const showQueryList = async () => {
    const result = await axios.get(ApiUrl + Constant.GET_ALL_QURIES);
    return result.data.data
}
export {showQueryList}