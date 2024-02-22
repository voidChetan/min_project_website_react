import React from 'react';
import Slider from './Slider';
import '../assets/CSS/slider.css';
import '../assets/CSS/Home.css'


const Home = () => {
    return (
        <div>
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

            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p>
                                Copyright © 2023 <a href="#">Mini Project Ideas</a> All rights
                                reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        </div>
    );
};

export default Home;