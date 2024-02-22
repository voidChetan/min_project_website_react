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
            <div className="col-lg-12 main-page mt-2">
                <h4>Top <em>Trending</em> Project<em> Ideas</em></h4>
            </div>
            <ProjectCard itemlist={itemlist}></ProjectCard>
            <div className='container-fluid'>
                <Slider />
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
                    <ProjectCard></ProjectCard>
                    <div>
                        <Footer></Footer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;