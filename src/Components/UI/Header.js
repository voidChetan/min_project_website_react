
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from '../../assets/Images/miniLogo.svg';


const Header = () => {
    const isLoggedIn = localStorage.getItem('userinfo');
    const userInfo = JSON.parse(isLoggedIn);
    const isAdminLoggedIn = userInfo && userInfo.emailId === 'admin@gmail.com' && userInfo.password === '1234';
    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = localStorage.getItem('userinfo');
        if (userInfo !== null) {
        }
    }, []);

    const logout = () => {
        localStorage.removeItem('userinfo');
        alert("Logged out successfully");
        navigate(''); // Redirect to /login on logout
    };

    return (
        <div>
            <div className="container-fluid p-0"></div>
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-md navbar-dark" style={{ backgroundColor: '#22b3c1' }}>
                        <img src={Logo} className="img-fluid" alt="Logo" style={{marginLeft:'16px',width:'10%'}}/>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {!isAdminLoggedIn ? (
                        <div className="collapse navbar-collapse d-flex justify-content-end me-4" id="navbarNav">
                            <ul className="navbar-nav" >
                                <li className="nav-item ">
                                    <Link className="nav-link text-white" to="/Home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/ContactUs">AboutUs</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/ContactUs">ContactUs</Link>
                                </li>
                            </ul>
                        </div>
                          ) : null}

                        {isAdminLoggedIn ? (
                            <div className="collapse navbar-collapse d-flex justify-content-end me-4" id="navbarNav">
                                <ul className="navbar-nav">
                                <li className="nav-item ">
                                    <Link className="nav-link text-white" to="/Home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/ContactUs">AboutMe</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/ContactUs">ContactUs</Link>
                                </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/Project">Project</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/Category">Category</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/Query">Query</Link>
                                    </li>

                                    <div className="col-4">
                                        <button className="btn btn-body" onClick={() => logout()}> <FontAwesomeIcon icon={faArrowRightToBracket} style={{ color: 'white', fontSize: '25px' }}/></button>
                                    </div>                                
                                    
                                </ul>

                            </div>
                        ) : null}
                    </nav>

                </div>
            </div>
        </div>

    );
};

export default Header;




