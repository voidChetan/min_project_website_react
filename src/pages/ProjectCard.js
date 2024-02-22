import React, { useEffect, useState } from 'react';
import '../assets/CSS/ProjectCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = (props) => {
    return (
        <div className='container'>
            <div className="row">
                <div className="row carditems">
                    <div className="col-lg-12">
                        <div className="items">
                            <div className="row flex-wrap">
                                {props.itemlist && props.itemlist.slice(0, 6).map((item, index) => (
                                    <div className="col-lg-6 mb-4" key={index}>
                                        <div className="item">
                                            <div className="row">
                                                <div className="col-lg-4 col-sm-5 projectIMG">
                                                    <div className="image">
                                                        <img src={`http://storeapi.gerasim.in/customer/${item.thumbnailName}`} className="img-fluid" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-8 col-sm-7">
                                                    <div className="right-content">
                                                        <h4>{item.projectShortName}</h4>
                                                        <span>{item.categoryName}</span>
                                                        <div dangerouslySetInnerHTML={{ __html: item.description.length > 100 ? `${item.description.substring(0, 50)}...` : item.description }} />
                                                        <div className="text-button">
                                                            <a target='_blank' className="btn btn-success text-white mr-2" href={item.liveVersionUrl}>Live Version <FontAwesomeIcon className='icon' icon={faArrowRight} /></a>
                                                            <button className="btn btn-sm btn-secondary me-2">Explore</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
