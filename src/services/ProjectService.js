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




const getDateOnly = (date)=>{
    const myDate  = new Date(date);
    const year = myDate.getFullYear();
    const month = myDate.getMonth()+1;
    const day = myDate.getDate();
    
    const newDate = day + '/' +month +  '/' + year;
    return newDate;
}

const addProjectData = async(Obj)=>{
    const result = await axios.post(apiEndPoint + myconstant.ADD_PROJECT, Obj);
    return result.data
}
const getCategoryName =async()=>{
    try {
        const result = await axios.get(apiEndPoint + myconstant.GET_CATEGORY_NAME);
        return result.data
    } catch (error) {
        console.log(error); 
    }
   }

const fileUpload =async(Obj)=>{
    const result = await axios.post('https://storeapi.gerasim.in/api/Customer/Upload' , Obj);
    return result.data
}

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


export { GetProjectsForMainPage,showProjectList, getDateOnly, addProjectData, getCategoryName, fileUpload,editProject,onDeleteProject  };

