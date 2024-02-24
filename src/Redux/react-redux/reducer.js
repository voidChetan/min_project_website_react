import {CATEGORYDATA,PROJECTDATA} from './constant';

const initialState = {
    categoryData : [],
    projectData: []
}

export default function applicationReducer(state=initialState,action){
    debugger
 switch(action.type){ 
     case CATEGORYDATA:
         return {
             ...state,
             categoryData:action.payload
         }
     
     case PROJECTDATA:
         return {
             ...state,
             projectData:action.payload
         }
     default:
         return{
             ...state
         }

 } 
}
