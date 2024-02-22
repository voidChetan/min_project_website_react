import React, { useEffect, useState } from 'react';
import Slider from './Slider';
import '../assets/CSS/slider.css';
import { GetProjectsForMainPage } from '../services/ProjectService';
import ProjectCard from './ProjectCard';


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
        </div>
    );
};

export default Home;