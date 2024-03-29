import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { GetProjectProjectId, GetProjectsForMainPage } from '../services/ProjectService';
import { getCategoryName } from '../services/CategoryService';
import '../assets/CSS/explore.css'

const Explore = () => {
    const location = useLocation();
    const projectId = location.state.projectId;
    const [projectdetail, setProjectdetail] = useState(null);
    const [itemlist, steItemlist] = useState([])
    const [category, setCategory] = useState([])

    useEffect(() => {
        const fetchProjectDetail = async () => {
            try {
                const result = await GetProjectProjectId(projectId);
                console.log("API Response Data:", result);
                setProjectdetail(result);
                GetProjectsForMainPage().then((data) => {
                    steItemlist(data);
                })
                getCategoryName().then((data) => {
                    setCategory(data)
                })
            } catch (error) {
                console.error("Error fetching project detail:", error);
            }
        };
        fetchProjectDetail();
    }, [projectId]);
    if (!projectdetail) {
        return <div>Loading...</div>;
    }
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-9'>
                    <img src={`http://storeapi.gerasim.in/customer/${projectdetail.bannerImageName}`} className="img-fluid" />
                    <div>
                        <h3 className='text-start mt-3'>Description</h3>
                        <div dangerouslySetInnerHTML={{ __html: projectdetail.description }} />
                    </div>
                    <div>
                        <h3 className='text-start mt-3'>Flow Diagram</h3>
                        <img src={`http://storeapi.gerasim.in/customer/${projectdetail.flowChartImageName}`} className="img-fluid" />
                    </div>
                </div>
                <div className='col-3'>
                    <div style={{ border: '1px solid #e9ecef' }}>
                        <form className="example" action="/action_page.php" style={{ margin: '20px', maxWidth: '300px' }}>
                            <input type="text" placeholder="Search.." name="search2" />
                            <button type="submit" style={{ backgroundColor: 'red', color: 'white' }}><FontAwesomeIcon className='icon' icon={faSearch} /></button>
                        </form>
                    </div>
                    <div className='p-3 mt-4' style={{ border: '1px solid #e9ecef' }}>
                        <h5 className='headingmarging'>Latest Projects</h5>
                        {itemlist && itemlist.slice(0, 3).map((item, index) => {
                            return (
                                <div className='row'>
                                    <div className='col-6'>
                                        <img src={`http://storeapi.gerasim.in/customer/${item.thumbnailName}`} className="img-fluid" style={{ width: '80px' }} />
                                    </div>
                                    <div className='col-6 text-start'>
                                        <p style={{ fontSize: '15px', fontWeight: '600' }}>Learn How {item.projectShortName} Application Works </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='p-3 mt-4 text-start' style={{ border: '1px solid #e9ecef' }} >
                        <h5 className='headingmarging'>Categories</h5>
                        <ul className='categorieslist'>
                            {Array.isArray(category) && category.slice(0, 6).map((item) => {
                                return (
                                    <li><a href="#"><FontAwesomeIcon icon={faAngleRight} className='faAngleRight' /> {item.categoryName} </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div  className='p-3 mt-4 text-start' style={{ border: '1px solid #e9ecef' }}>                   
                            <h5 className='headingmarging'>Archives</h5>                                              
                            <ul className='categorieslist'>
                                <li><a href="#"><FontAwesomeIcon icon={faAngleRight} className='faAngleRight' /> January 2022
                                </a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faAngleRight} className='faAngleRight' /> February 2022
                                </a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faAngleRight} className='faAngleRight' /> April 2022 </a>
                                </li>
                            </ul>                      
                    </div>
                    <div  className='p-3 mt-4 text-start' style={{ border: '1px solid #e9ecef' }}>                       
                            <h5 className='headingmarging'>Latest Tags</h5>                                               
                            <ul className="tags">
                                <li><a href="#" className="tag">HTML</a></li>
                                <li><a href="#" className="tag">Java Script</a></li>
                                <li><a href="#" className="tag">Css</a></li>
                                <li><a href="#" className="tag">Jquery</a></li>
                                <li><a href="#" className="tag">Java</a></li>
                                <li><a href="#" className="tag">React</a></li>
                            </ul>                     
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Explore;
