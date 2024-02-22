import React, { useEffect, useState } from 'react';
import { showProjectList,editProject,onDeleteProject } from '../services/ProjectService';
import { useNavigate,Link } from 'react-router-dom';

const ProjectList = () => {
    let navigate = useNavigate();
    let editnavigate = useNavigate();
    const [isShowForm, setIsShowForm] = useState(false);
    const [isShowCard, setIsShowCard] = useState(false);
    const [isLoader, setIsLoader] = useState(true);
    const [projectList, setProjectList] = useState([]);

    const [projectObj, setProjectObj] = useState(
        {
            projectId: 0,
            projectShortName: "",
            projectLongName: "",
            description: "",
            thumbnailName: "",
            bannerImageName: "",
            liveVersionUrl: "",
            projectCategoryId: 0,
            flowChartImageName: "",
            flowChartEmialId: "",
            createdOn: new Date(),
            modifiedOn: new Date(),
            tags: "",
            apiControllerName: "",
            apiProjectName: "",
            apiHostedUrl: "",
            gitHubRepoUrl: "",
            showOnLandingPage: false,
            isPrivate: false
        }
    );
    //Get Project List
    const getAllProjectData = () => {
        showProjectList().then((data) => {
            setProjectList(data);
            setIsLoader(false);
        });
    };

    useEffect(() => {
        getAllProjectData();
    }, []);

    // Function to format date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString(); // You can adjust the format as needed
    };

    // Function to display formatted date
    const displayDate = (dateString) => {
        return formatDate(dateString);
    };


    const showCard = () => {
        setIsShowCard(true);
    };

    const showTable = () => {
        setIsShowCard(false);
    };
    const AddData = () => {
        navigate('/NewProject');
    };
   

    // const onEdit = (projectId) => {

    //     editProject(projectId).then((data) => {
    //         console.log(data)
    //         if (data.result) {
    //             editnavigate('/NewProject');
    //             setProjectObj(data.data)
                
    //         }
          
    //         else {
    //             alert(data.message)
    //         }
    //     })
    // }

    const onEdit = (projectId) => {
        editProject(projectId).then((data) => {
            const projectData = data.data;
            editnavigate('/NewProject');
            setProjectObj({
                projectId: projectData.projectId,
                projectShortName: projectData.projectShortName,
                projectLongName: projectData.projectLongName,
                description: projectData.description,
                thumbnailName: projectData.thumbnailName,
                bannerImageName: projectData.bannerImageName,
                liveVersionUrl: projectData.liveVersionUrl,
                projectCategoryId: projectData.projectCategoryId,
                flowChartImageName: projectData.flowChartImageName,
                flowChartEmialId: projectData.flowChartEmialId,
                createdOn: projectData.createdOn,
                modifiedOn: projectData.modifiedOn,
                tags: projectData.tags,
                apiControllerName: projectData.apiControllerName,
                apiProjectName: projectData.apiProjectName,
                apiHostedUrl: projectData.apiHostedUrl,
                gitHubRepoUrl: projectData.gitHubRepoUrl,
                showOnLandingPage: projectData.showOnLandingPage,
                isPrivate: projectData.isPrivate
            });
        }).catch((error) => {
            console.error('Error fetching project data:', error);
        });
    }

     //Delete
     const deleteProjectData = (projectId) => {
        onDeleteProject(projectId).then((data) => {
            if (data.result) {
                alert("Project Deleted Successfully");
                getAllProjectData();
            } else {
                alert(data.message);
            }
        })
    }
    return (
        <div className='container-fluid mt-3'>
            <div className='row'>
                <div className={`col-${isShowForm ? '8' : '12'}`}>
                    <div className='card'>
                        <div className='card-header' style={{ backgroundColor: '#03748A' }}>
                            <div className='row'>
                                <div className='col-2 text-start'>
                                    <strong className='text-white'>Project Form</strong>
                                </div>
                                <div className='col-8 text-end'>
                                    {!isShowCard && (
                                        <button className='btn btn-body p-0 outline' onClick={showCard}>
                                            <i className='fa fa-th fa-lg text-white' aria-hidden='true'></i>
                                        </button>
                                    )}
                                    {isShowCard && (
                                        <button className='btn btn-body p-0 outline' onClick={showTable}>
                                            <i className='fa fa-table fa-lg text-white' aria-hidden='true'></i>
                                        </button>
                                    )}
                                </div>
                                <div className='col-2 text-end'>
                                        <button className='btn btn-danger btn-sm' onClick={AddData}>Add Data</button>
                                    </div>
                             
                            </div>
                        </div>

                        {!isShowCard && (
                            <div className='card-body'>
                                <table className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            <th>Sr No</th>
                                            <th>Project Short Name</th>
                                            <th>Created On</th>
                                            <th>Category Name</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {isLoader ? (
                                            <tr>
                                                <td colSpan={6} className='text-center'>
                                                    <div className='spinner-border text-muted'></div>
                                                    <div className='spinner-border text-primary'></div>
                                                    <div className='spinner-border text-success'></div>
                                                    <div className='spinner-border text-info'></div>
                                                    <div className='spinner-border text-warning'></div>
                                                    <div className='spinner-border text-danger'></div>
                                                    <div className='spinner-border text-secondary'></div>
                                                    <div className='spinner-border text-dark'></div>
                                                    <div className='spinner-border text-light'></div>
                                                </td>
                                            </tr>
                                        ) : (
                                            projectList.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.projectShortName}</td>
                                                    <td>{displayDate(item.createdOn)}</td>
                                                    <td>{item.categoryName}</td>
                                                 
                                                    <td><button className='btn btn-sm btn-success' to="/NewProject" onClick={() => { onEdit(item.projectId) }}><i className='fa fa-pencil'></i></button></td>
                                                    <td><button className='btn btn-sm btn-danger' onClick={() => { deleteProjectData(item.projectId) }}><i className='fa fa-trash-o'></i></button></td>
                                                 
                                                   
                                                       
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        )}


                        {isShowCard && (
                            
                            <div class="card">
                                <div className='row'>
                                    {projectList.map((item, index) => (

                                        <div key={index} className='col-lg-3 col-md-6 col-sm-12 mb-4'>
                                            <div className='card' style={{ height: '100%' }}>
                                                <div className='card-header' style={{ backgroundColor: '#03748A' }}>
                                                    <h5 className='card-title text-center text-white'>
                                                        <b>{item.projectShortName}</b>
                                                    </h5>
                                                </div>
                                                <img
                                                    className='card-img-top img-fluid'
                                                    src={`http://storeapi.gerasim.in/customer/${item.thumbnailName}`}
                                                    alt='Card cap'
                                                    style={{ height: '120px', objectFit: 'cover' }}
                                                />
                                                <div className='card-body d-flex flex-column'>
                                                    <div className='row d-flex'>
                                                        <div className='col-6 text-start'><b>{displayDate(item.createdOn)}</b></div>
                                                        <div className='col-6 text-end'><b>{item.categoryName}</b></div>
                                                    </div>
                                                    <p className='card-text'>
                                                        <div
                                                            dangerouslySetInnerHTML={{
                                                                __html: item.description.length > 100 ? `${item.description.substring(0, 100)}...` : item.description,
                                                            }}
                                                        ></div>
                                                    </p>
                                                    <div className='mt-auto'>
                                                        <div className='row'>
                                                            <div className='col-6'>
                                                                <button className='btn btn-sm btn-success w-100'>
                                                               <button className='btn btn-sm btn-success' to="/NewProject" onClick={() => { onEdit(item.projectId) }}><i className='fa fa-pencil'></i></button>
                                                   
                                                                </button>
                                                            </div>
                                                            <div className='col-6'>
                                                                <button className='btn btn-sm btn-danger w-100'>
                                                               <button className='btn btn-sm btn-danger' onClick={() => { deleteProjectData(item.projectId) }}><i className='fa fa-trash-o'></i></button>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>


                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectList;
