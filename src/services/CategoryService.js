import axios from 'axios';
import * as Constant from './Constants';
const ApiEndPoint=process.env.REACT_APP_API_KEY;

// CategoryApi
const getCategoryName=async()=>{
    const result=await axios.get(ApiEndPoint+Constant.GET_ALL_CATEGORY);
    return result.data;
}

const addCategoryData=async(obj)=>{
    const result=await axios.post(ApiEndPoint+Constant.ADD_CATEGORY,obj);
    return result.data;

}

const updateCategory =async(obj)=>{
    const result=await axios.post(ApiEndPoint+Constant.UPDATE_CATEGORY ,obj);
    return result.data;
}

const  deleteCategoryData=async(id)=>{
    const result=await axios.delete(ApiEndPoint+Constant.DELETE_CATEGORY_BY_ID+id);
    return result.data;

}

//MainPageData
const getProjectForMainPage=async()=>{
    const result=await axios.get(ApiEndPoint+Constant+Constant.GET_DATA_FOR_MAIN_PAGE);
    return result.data;
}

export{getCategoryName,addCategoryData ,deleteCategoryData,updateCategory ,getProjectForMainPage}