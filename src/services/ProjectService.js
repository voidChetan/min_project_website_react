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

const showProjectList = async () => {
    const result = await axios.get(apiEndPoint + myconstant.GET_ALL_PROJECT);
    return result.data.data
}
const editProject = async (id) => {
    try {
        const result = await axios.get(apiEndPoint + myconstant.EDIT_PROJECT + id)
       
        return result.data
    } catch (error) {
        alert(error.code)
    }
}
const onDeleteProject = async (id) => {
    const isDelte = window.confirm("Are You Sure want to Delete");
    if (isDelte) {
        const result = await axios.delete(apiEndPoint + myconstant.DELETE_PROJECT + id);
        return result.data

    }
};

export { GetProjectsForMainPage,showProjectList,editProject,onDeleteProject };
