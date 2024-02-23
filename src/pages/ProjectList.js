import React, { useEffect, useState } from 'react';
import { showProjectList, editProject, onDeleteProject } from '../services/ProjectService';
import { useNavigate, Link } from 'react-router-dom';

const ProjectList = () => {
    let navigate = useNavigate();
    let editnavigate = useNavigate();

    const [isShowForm, setIsShowForm] = useState(false);

    const [isShowCard, setIsShowCard] = useState(false);
    const [isLoader, setIsLoader] = useState(true);
    const [projectList, setProjectList] = useState([]);




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
        navigate('/NewProject', { state: { project: { /* default or placeholder data */ } } });
    };
    
    

    const edit = (projectId) => {
        debugger;
        editProject(projectId).then((data) => {
            if (data.result) {
                debugger;
                navigate(`/NewProject?id=${projectId}`, { state: { project: data.data } });
                debugger;
            } else {
                alert(data.message);
            }
        }).catch((error) => {
            console.error('Error fetching project data:', error);
        });
    };


    const onEdit = (projectId) => {

        editProject(projectId).then((data) => {
            console.log(data)
            if (data.result) {
                editnavigate('/NewProject');
                // setProjectObj(data.data)

            }

            else {
                alert(data.message)
            }
        })
    }
   


   

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

                                                    <td> <button className='btn btn-sm btn-success' onClick={() => edit(item.projectId)}><i className='fa fa-pencil'></i></button></td>
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
                                                <img
                                                    className='card-img-top img-fluid'
                                                    src={`http://storeapi.gerasim.in/customer/${item.thumbnailName}`}
                                                    alt='Card cap'
                                                    style={{ height: '120px', objectFit: 'cover' }}
                                                />
                                                <div className='card-body d-flex flex-column'>
                                                    <div className='row d-flex'>
                                                        <div className='col-6 text-start'><small>{item.projectShortName}</small></div>
                                                        <div className='col-6 text-end'><small>{item.categoryName}</small></div>
                                                    </div>
                                                    <div className=' '>
                                                        <i className='fa fa-pencil text-success edit-icon' to="/NewProject" onClick={() => { onEdit(item.projectId) }}></i>

                                                        <i className='fa fa-trash-o text-danger delete-icon' onClick={() => { deleteProjectData(item.projectId) }}></i>



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
