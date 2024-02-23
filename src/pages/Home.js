import React, { useEffect, useState } from 'react';
import Slider from './Slider';
import '../assets/CSS/slider.css';
import { GetProjectsForMainPage } from '../services/ProjectService';
import ProjectCard from './ProjectCard';
import '../assets/CSS/Home.css';
import Footer from './Footer';


const Home = () => {
    const [itemlist, steItemlist] = useState([])
    useEffect(() => {
        GetProjectsForMainPage().then((data) => {
            steItemlist(data);
        })

    }, [])
    return (
        <div>
            <Slider />
            <div className="col-lg-12 main-page mt-4">
                <h4>Top <em>Trending</em> Project<em> Ideas</em></h4>
            </div>
            <div className="row">
                {itemlist && itemlist.slice(0, 6).map((item, index) => (
                    <div className="col-lg-6 mb-4" key={index}>
                        <ProjectCard item={item} index={index} />
                    </div>
                ))}
            </div>
            <div className='container-fluid'>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-7">
                            <div className="section-heading">
                                <h2>Welcome to Mini Project Ideas</h2>
                                <p className="section-p">
                                    A portal where your search ends for Project Idea, Wide range of
                                    projects with source code and a great Commuinity of Experts
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Footer></Footer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;