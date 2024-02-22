import React from 'react';
import left_about_img from '../assets/Images/leftimg.jpg';

const Footer = () => {
    return (
        <div className='container-fluid p-0'>
            <div className="more-about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <div className="left-image">
                                <img src={left_about_img} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <h2>Why Us.. ?</h2>
                                <p className="section-p">
                                    you get to see wide range of project ideas with solution and
                                    video to guide and our community is always there to guide and
                                    assist you.
                                </p>
                                <p className="section-p">
                                    A Result oriented portal to upskill you in your profession
                                    career.
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="info-item">
                                        <h4>2000 +</h4>
                                        <span>Projects Ideas</span>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="info-item">
                                        <h4>5000 +</h4>
                                        <span> Members Registered </span>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="info-item">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <h4>500 +</h4>
                                                <span>Code Samples</span>
                                            </div>
                                            <div className="col-lg-6">
                                                <h4>10 +</h4>
                                                <span>New Ideas Every Week</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="main-button">
                                <a href="#">Join Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="call-to-action">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2>Are You Looking For Something?</h2>
                            <h4>Contact Us By Clicking The Button</h4>
                        </div>
                        <div className="col-lg-4">
                            <div className="border-button">
                                <a href="#">Connect With US </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p className="footer-p">
                                Copyright © 2023 <a className='footer-a' href="#">Mini Project Ideas</a> All rights
                                reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;