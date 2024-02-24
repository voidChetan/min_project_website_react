import {CATEGORYDATA, PROJECTDATA} from './constant'

const getCategiryData = (parameterData) => (dispatch) => { 
  debugger;
  console.log("getMobileData called") 
  dispatch({
      type:CATEGORYDATA,
      payload: {data:parameterData}
  })
}
const getProjectData = (parameterData) => (dispatch) => { 
    console.log("getMobileData called") 
    dispatch({
        type:PROJECTDATA,
        payload: {data:parameterData}
    })
  }

  export { getCategiryData,getProjectData }