import React from 'react';
import '../assets/CSS/ProjectCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const ProjectCard = (props) => {
    const navigate = useNavigate();
    const OpenProduct = (project) => {
        navigate(`/Explore?id=${project.projectId}`, { state: project });
    };

    return (
        <div className="container m-4">
            <div className="item">
                <div className="row">
                    <div className="col-lg-4 col-sm-5 projectIMG">
                        <div className="image">
                            <img src={`http://storeapi.gerasim.in/customer/${props.item.thumbnailName}`} className="img-fluid" alt="Project Thumbnail" />
                        </div>
                    </div>
                    <div className="col-lg-8 col-sm-7">
                        <div className="right-content">
                            <h4>{props.item.projectShortName}</h4>
                            <span>{props.item.categoryName}</span>
                            <div dangerouslySetInnerHTML={{ __html: props.item.description.length > 100 ? `${props.item.description.substring(0, 50)}...` : props.item.description }} />
                            <div className="text-button">
                                <a target='_blank' className="btn btn-success text-white mr-2" href={props.item.liveVersionUrl}>Live Version <FontAwesomeIcon className='icon' icon={faArrowRight} /></a>
                                <button className="btn btn-sm btn-secondary me-2" onClick={() => OpenProduct(props.item)}>Explore</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
