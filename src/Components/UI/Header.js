import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Images/logo-3.png';

const Header = () => {
    return (
        <div>
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-md navbar-dark " style={{ backgroundColor: '#22b3c1' }}>
                        <img src={Logo} className="img-fluid" alt="Logo" style={{marginLeft:'16px', width: '150px', height: '60px' }} />
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse d-flex justify-content-end me-4" id="navbarNav">
                                <ul className="navbar-nav">
                                <li className="nav-item">
                                        <Link className="nav-link  text-white" to="/Login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link  text-white" to="/Home">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link  text-white" to="/Project">Project</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link  text-white" to="/Category">Category</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link  text-white" to="/ContactUs">ContactUs</Link>
                                    </li>                                   
                                    <li className="nav-item">
                                        <Link className="nav-link  text-white" to="/Query">Query</Link>
                                    </li>                                   
                                    
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;









