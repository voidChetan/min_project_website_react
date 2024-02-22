import React, { useEffect } from 'react';
import '../assets/CSS/slider.css';



const Slider = () => {

    useEffect(() => {
      
        // Set up automatic sliding
        const radioButtons = document.querySelectorAll('input[name="banner"]');
        let currentIndex = 0;

        const intervalId = setInterval(() => {
            // Manually change the checked state of radio buttons
            radioButtons[currentIndex].checked = false;

            // Update the index for the next radio button
            currentIndex = (currentIndex + 1) % radioButtons.length;

            // Manually change the checked state of the next radio button
            radioButtons[currentIndex].checked = true;
        }, 5000); // Change this value to adjust the slide duration

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []); // Run only once on component mount

    return (
        <div>
            <section id="section-1">
                <div class="content-slider">
                    <input type="radio" id="banner1" class="sec-1-input" name="banner" checked />
                    <input type="radio" id="banner2" class="sec-1-input" name="banner" />
                    <input type="radio" id="banner3" class="sec-1-input" name="banner" />
                    <input type="radio" id="banner4" class="sec-1-input" name="banner" />
                    <div class="slider">
                        <div id="top-banner-1" class="banner">
                            <div class="banner-inner-wrapper header-text">
                                <div class="main-caption">
                                    <h2>Are you a Student</h2>
                                    <h1>We have Mini Project Ideas</h1>
                                    <div class="border-button"><a href="#">Go There</a></div>
                                </div>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="more-info">
                                                <div class="row">
                                                    <div class="col-lg-3 col-sm-6 col-6">
                                                        <i class="fa fa-user"></i>
                                                        <h4><span>Ideas:</span><br />100+</h4>
                                                    </div>
                                                    <div class="col-lg-3 col-sm-6 col-6">
                                                        <i class="fa fa-globe"></i>
                                                        <h4><span>Mini Projects:</span><br />50+</h4>
                                                    </div>
                                                    <div class="col-lg-3 col-sm-6 col-6">
                                                        <i class="fa fa-home"></i>
                                                        <h4><span>Patents:</span><br />6</h4>
                                                    </div>
                                                    <div class="col-lg-3 col-sm-6 col-6">
                                                        <i class="fa fa-home"></i>
                                                        <h4><span>Members:</span><br />4000</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="top-banner-2" class="banner">
                            <div class="banner-inner-wrapper header-text">
                                <div class="main-caption">
                                    <h2>Are you Learning New Technology</h2>
                                    <h1>Start with Project Ideas</h1>
                                    <div class="border-button"><a href="#">Go There</a></div>
                                </div>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="more-info">
                                                <div class="row">
                                                    <div class="col-lg-3 col-sm-6 col-6">
                                                        <i class="fa fa-user"></i>
                                                        <h4><span>Ideas:</span><br />100+</h4>
                                                    </div>
                                                    <div class="col-lg-3 col-sm-6 col-6">
                                                        <i class="fa fa-globe"></i>
                                                        <h4><span>Mini Projects:</span><br />50+</h4>
                                                    </div>
                                                    <div class="col-lg-3 col-sm-6 col-6">
                                                        <i class="fa fa-home"></i>
                                                        <h4><span>Patents:</span><br />6</h4>
                                                    </div>
                                                    <div class="col-lg-3 col-sm-6 col-6">
                                                        <i class="fa fa-home"></i>
                                                        <h4><span>Members:</span><br />4000</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="top-banner-3" class="banner">
                            <div class="banner-inner-wrapper header-text">
                                <div class="main-caption">
                                    <h2>Are you a Software Developer</h2>
                                    <h1>convert an idea into Project</h1>
                                    <div class="border-button"><a href="#">Go There</a></div>
                                </div>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="more-info">
                                                <div class="row">
                                                    <div class="col-lg-3 col-sm-6 col-6">
                                                        <i class="fa fa-user"></i>
                                                        <h4><span>Ideas:</span><br />100+</h4>
                                                    </div>
                                                    <div class="col-lg-3 col-sm-6 col-6">
                                                        <i class="fa fa-globe"></i>
                                                        <h4><span>Mini Projects:</span><br />50+</h4>
                                                    </div>
                                                    <div class="col-lg-3 col-sm-6 col-6">
                                                        <i class="fa fa-home"></i>
                                                        <h4><span>Patents:</span><br />6</h4>
                                                    </div>
                                                    <div class="col-lg-3 col-sm-6 col-6">
                                                        <i class="fa fa-home"></i>
                                                        <h4><span>Members:</span><br />4000</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="top-banner-4" class="banner">
                            <div class="banner-inner-wrapper header-text">
                                <div class="main-caption">
                                    <h2>are you a Entrepreneur</h2>
                                    <h1>ideas to be your next Business</h1>
                                    <div class="border-button"><a href="#">Go There</a></div>
                                </div>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="more-info">
                                                <div class="row">
                                                    <div class="col-lg-3 col-sm-6 col-6">
                                                        <i class="fa fa-user"></i>
                                                        <h4><span>Ideas:</span><br />100+</h4>
                                                    </div>
                                                    <div class="col-lg-3 col-sm-6 col-6">
                                                        <i class="fa fa-globe"></i>
                                                        <h4><span>Mini Projects:</span><br />50+</h4>
                                                    </div>
                                                    <div class="col-lg-3 col-sm-6 col-6">
                                                        <i class="fa fa-home"></i>
                                                        <h4><span>Patents:</span><br />6</h4>
                                                    </div>
                                                    <div class="col-lg-3 col-sm-6 col-6">
                                                        <i class="fa fa-home"></i>
                                                        <h4><span>Members:</span><br />4000</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav>
                        <div class="controls">
                            <label for="banner1"><span class="progressbar"><span class="progressbar-fill"></span></span><span
                                class="text">1</span></label>
                            <label for="banner2"><span class="progressbar"><span class="progressbar-fill"></span></span><span
                                class="text">2</span></label>
                            <label for="banner3"><span class="progressbar"><span class="progressbar-fill"></span></span><span
                                class="text">3</span></label>
                            <label for="banner4"><span class="progressbar"><span class="progressbar-fill"></span></span><span
                                class="text">4</span></label>
                        </div>
                    </nav>
                </div>
            </section>
        </div>
    );
};

export default Slider;