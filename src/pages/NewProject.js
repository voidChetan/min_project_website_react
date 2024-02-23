
import { useState, useEffect, useRef, useMemo} from 'react';
import { useNavigate, useLocation} from 'react-router-dom';
import { addProjectData, getCategoryName, getDateOnly, fileUpload, updateProject } from '../services/ProjectService';
import JoditEditor from 'jodit-react';

const NewProject = ({ placeholder }) => {
    
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
    let [formsubmited, setFormSubmited] = useState(false);
    let [projectCategory, setProjectCategory] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const { project } = location.state;

    const handleInputChange = (event, key) => {
        setProjectObj(prevObj => ({ ...prevObj, [key]: event.target.value }));
    };
    const editor = useRef(null); // Create a ref to hold the editor instance
    // const [projectDescription, setprojectDescription] = useState(''); 
    const changeDescription = (event, key) => {
        setProjectObj(prevObj => ({ ...prevObj, [key]: event }))
    }
    // **************
    const config = useMemo(
        () => ({
            readonly: false,
            placeholder: placeholder || 'Enter Description...'
        }),
        [placeholder]
    );
    const checkBoxLandingPage = (event) => {
        setProjectObj((prevObj) => ({
            ...prevObj, showOnLandingPage: event.target.checked,
        }));
    };
    const checkBoxIsPrivate = (event) => {
        setProjectObj((prevObj) => ({
            ...prevObj, isPrivate: event.target.checked,
        }));
    };
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const handleThumbnailImageChange = async (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        fileUpload(formData).then((data) => {
            if (data) {
                alert("Thumbnail Image Upload Sucessfully");
                setProjectObj(prevObj => ({ ...prevObj, thumbnailName: data }))
            }
        })
    }

    const handleBannerImageChange = async (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        fileUpload(formData).then((data) => {
            if (data) {
                alert("Banner Image Upload Sucessfully");
                setProjectObj(prevObj => ({ ...prevObj, bannerImageName: data }))
            }
        })
    }
    const handleFlowChartImageChange = async (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        fileUpload(formData).then((data) => {
            if (data) {
                alert("Flow Chart Image Upload Sucessfully");
                setProjectObj(prevObj => ({ ...prevObj, flowChartImageName: data }))
            }
        })
    }
    useEffect(() => {
        getAllCategoryName();
        const currentDate = new Date();
        const formatedDate = getDateOnly(currentDate);
        if (project) {
            setProjectObj(project);
        }
    }, [project]);

    const getAllCategoryName = () => {
        getCategoryName().then((data) => {
            setProjectCategory(data.data);
        })

    }
    const addAllProjectData = () => {
        try {
            setFormSubmited(true)

            addProjectData(projectObj).then((data) => {
                if (data.result) {
                    alert("Project Added Successfully");
                    // getAllProjectList();
                } else {
                    alert(data.message);
                }
            })


        } catch (error) {
            alert(error.code)
        }
    }

       const reset = () => {
        setFormSubmited(true)
           setProjectObj({
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
        })
       
    }
    const navigateToProjectList = (updatedProject) => {
        navigate(`projectList?id=${updatedProject.projectId}`, { state: updatedProject })
    }

    const updateAllProjectList = () => {
        setFormSubmited(true);
        updateProject(projectObj).then((data) => {
            if (data.result) {
                alert('Project Updated Sucessfully')
                 navigateToProjectList(projectObj);
            } else {
                alert(data.message)
            }
        })
    }

    const projectList = () => {
        navigate('/Project');
    }
   

    return (
        <div>
            <div className='container-fluid p-0 mt-1'>

                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header" style={{ backgroundColor: '#03748A' }}>
                                <div className="row">
                                    <div className="col-6 text-start"><strong className='text-white'>Project Form</strong></div>
                                    <div className='col-6 text-end'><button className='btn btn-danger' onClick={projectList}>Project List</button></div>
                                </div>
                            </div>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-md-2'>
                                        <label>Project Short Name</label>
                                        <input type='text' className='form-control ' placeholder='Enter Project Short Name' value={projectObj.projectShortName} onChange={(event) => { handleInputChange(event, 'projectShortName') }} />
                                        <div className='text-danger'>
                                            {
                                                formsubmited && projectObj.projectShortName == '' && <span>Project ShortName Is Required </span>
                                            }
                                        </div>
                                    </div>
                                    <div className='col-md-4'>

                                        <label >Project Long Name</label>
                                        <input type='text' className='form-control ' placeholder='Enter Project Long Name' value={projectObj.projectLongName} onChange={(event) => { handleInputChange(event, 'projectLongName') }} />
                                        <div className='text-danger'>
                                            {
                                                formsubmited && projectObj.projectLongName == '' && <span>Project Long Name Is Required </span>
                                            }
                                        </div>

                                    </div>

                                    <div className='col-3'>
                                        <label >Project Category Name</label>
                                        <select className='form-select' value={projectObj.projectCategoryId} onChange={(event) => { handleInputChange(event, 'projectCategoryId') }}>
                                            <option>Select Project Category</option>
                                            {
                                                projectCategory.map((item) => {
                                                    return (<option value={item.projectCategoryId}>{item.categoryName}</option>)
                                                })
                                            }

                                        </select>
                                        <div className='text-danger'>
                                            {
                                                formsubmited && projectObj.projectCategoryId == '' && <span>Category Name Is Required </span>
                                            }
                                        </div>

                                    </div>
                                    <div className='col-3'>
                                        <label >Flow Chart EmailId</label>
                                        <input type='text' className='form-control' placeholder='Flow Chart Emial Id' value={projectObj.flowChartEmialId} onChange={(event) => { handleInputChange(event, 'flowChartEmialId') }} />
                                        <div className='text-danger'>
                                            {
                                                formsubmited && !isValidEmail(projectObj.flowChartEmialId) == '' && <span>Flow Chart EmialId Is Required </span>
                                            }
                                        </div>

                                    </div>
                                </div>
                                <div className='row mt-2'>


                                    <div className='col-3'>
                                        <label >Tags</label>
                                        <input type='text' className='form-control' placeholder='Tags' value={projectObj.tags} onChange={(event) => { handleInputChange(event, 'tags') }} />
                                        <div className='text-danger'>
                                            {
                                                formsubmited && projectObj.tags == '' && <span>Tags Is Required </span>
                                            }
                                        </div>

                                    </div>
                                    <div className='col-3'>
                                        <label >Api Controller Name</label>
                                        <input type='text' className='form-control' placeholder='Api Controller Name' value={projectObj.apiControllerName} onChange={(event) => { handleInputChange(event, 'apiControllerName') }} />
                                        <div className='text-danger'>
                                            {
                                                formsubmited && projectObj.apiControllerName == '' && <span>Api Controller NameIs Required </span>
                                            }
                                        </div>

                                    </div>
                                    <div className='col-3'>
                                        <label >Api Project Name</label>
                                        <input type='text' className='form-control' placeholder='Enter Api Project Name' value={projectObj.apiProjectName} onChange={(event) => { handleInputChange(event, 'apiProjectName') }} />
                                        <div className='text-danger'>
                                            {
                                                formsubmited && projectObj.apiProjectName == '' && <span>Api Project Name Is Required </span>
                                            }
                                        </div>

                                    </div>
                                    <div className='col-3 mt-4'>
                                        <input className="form-check-input" type="checkbox" checked={projectObj.showOnLandingPage} onChange={(event) => { checkBoxLandingPage(event, 'showOnLandingPage') }} />
                                        <label >Show On Landing Page</label>

                                    </div>


                                </div>
                                <hr className='my-4' style={{ backgroundColor: 'black', height: '2px' }} />
                                <div className='row mt-2 mb-2'>
                                    <div className='col-3'>
                                        <label >Live Version Url</label>
                                        <input type='text' className='form-control' placeholder='Enter live Version Url' value={projectObj.liveVersionUrl} onChange={(event) => { handleInputChange(event, 'liveVersionUrl') }} />
                                        <div className='text-danger'>
                                            {
                                                formsubmited && projectObj.liveVersionUrl == '' && <span>Live Version Url Is Required </span>
                                            }
                                        </div>

                                    </div>
                                    <div className='col-3'>
                                        <label >Api Hosted Url</label>
                                        <input type='text' className='form-control' placeholder='Enter Api Hosted Url' value={projectObj.apiHostedUrl} onChange={(event) => { handleInputChange(event, 'apiHostedUrl') }} />
                                        <div className='text-danger'>
                                            {
                                                formsubmited && projectObj.apiHostedUrl == '' && <span>Api Hosted UrlIs Required </span>
                                            }
                                        </div>

                                    </div>
                                    <div className='col-3'>
                                        <label >Github Repository Url</label>
                                        <input type='text' className='form-control' placeholder='Enter Git HubRepo Url' value={projectObj.gitHubRepoUrl} onChange={(event) => { handleInputChange(event, 'gitHubRepoUrl') }} />
                                        <div className='text-danger'>
                                            {
                                                formsubmited && projectObj.gitHubRepoUrl == '' && <span>GitHub Repo Url Is Required </span>
                                            }
                                        </div>

                                    </div>
                                    <div className='col-3 mt-4'>

                                        <input className="form-check-input ms-2" type="checkbox" checked={projectObj.isPrivate} onChange={(event) => { checkBoxIsPrivate(event, 'isPrivate') }} />
                                        <label >Is Private</label>
                                    </div>
                                </div>
                                <hr className='my-4' style={{ backgroundColor: 'black', height: '2px' }} />
                                <div className='row mt-2 mb-2'>
                                    <div className='col-md-3'>
                                        <label >Thumbnail Image Name</label>
                                        <input type='file' className='form-control' placeholder='Enter Thumbnal Name' onChange={(event) => { handleThumbnailImageChange(event) }} />
                                        <div className='text-danger'>
                                            {
                                                formsubmited && projectObj.thumbnailName == '' && <span>Thumbnail Name Is Required </span>
                                            }
                                        </div>

                                    </div>
                                    <div className='col-3'>
                                        <label >Banner Image Name</label>
                                        <input type='file' className='form-control' placeholder='Enter Banner Image Name' onChange={(event) => { handleBannerImageChange(event) }} />
                                        <div className='text-danger'>
                                            {
                                                formsubmited && projectObj.bannerImageName == '' && <span>Banner ImageName Is Required </span>
                                            }
                                        </div>

                                    </div>

                                    <div className='col-3'>
                                        <label >Flow Chart Image Name</label>
                                        <input type='file' className='form-control' placeholder='Enter Flow Chart Image Name' onChange={(event) => { handleFlowChartImageChange(event) }} />
                                        <div className='text-danger'>
                                            {
                                                formsubmited && projectObj.flowChartImageName == '' && <span>Flow Chart Image Name Is Required </span>
                                            }
                                        </div>

                                    </div>

                                </div>
                                <hr className='my-4 ' style={{ backgroundColor: 'black', height: '2px' }} />
                                <div className='row mt-2'>
                                    <div className='col-12'>
                                        <div style={{ width: '100%', overflow: 'auto' }}>
                                            <JoditEditor
                                                ref={editor} value={projectObj.description}
                                                onChange={(newContent) => {
                                                    if (newContent.length > 200) {
                                                        const truncatedContent = newContent.substring(0, 200);
                                                        changeDescription(truncatedContent, 'description');
                                                        alert('Maximum character limit (200)');
                                                    } else {
                                                        changeDescription(newContent, 'description');
                                                    }
                                                }}
                                                config={config}
                                                style={{ width: '100%', height: '100%' }}
                                            />

                                        </div>
                                    </div>
                                </div>

                                <div className='row mb-2 mt-2'>
                                    <div className='col-2 text-start'>
                                        <button className='btn btn-secondary' onClick={reset}>Reset</button>
                                    </div>
                                    <div className='col-10 text-end'>
                                        {
                                            projectObj.projectId == 0 && <button className='btn btn-success btn-primary' onClick={addAllProjectData}>Add Project</button>
                                        }
                                        {
                                            projectObj.projectId !== 0 && <button className='btn btn-success btn-warning' onClick={updateAllProjectList}>Update</button>
                                        }
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProject;