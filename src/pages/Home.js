import React from 'react';
import Slider from './Slider';
import '../assets/CSS/slider.css';
import '../assets/CSS/Home.css';
import ProjectCard from './ProjectCard';
import left_about_img from '../assets/Images/leftimg.jpg';
import Footer from './Footer';


const Home = () => {
    return (
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
    );
};

export default Home;