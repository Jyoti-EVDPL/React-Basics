import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import showTime from './showTime';
import Timer from './showTime';
import About from './About';
import { Link,useNavigate } from 'react-router-dom';

export default function Navbar(props) {
    const Navigate = useNavigate();
    const auth = localStorage.getItem('token');
    const Logout = () => {
        localStorage.removeItem('token');
        alert('Logged out Successfully');
        Navigate("/SignIn");
    };


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bolder text-primary bg-" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" to="/" tabIndex="-1" aria-disabled="true">(Disabled)</Link>
                            </li>
                            <li><abbr title='Disable Dark Mode'></abbr></li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Todo">Todo</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    DropPannel
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/Api_Testing">Api_Testing</Link></li>
                                    <li><Link className="dropdown-item" to="/">Another action</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    User
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {/* <li>{auth?<Link onClick={Logout} className="dropdown-item" to="/Logout">Logout</Link>:<Link className="dropdown-item" to="/SignIn">SignIn</Link>}</li> */}
                                    <li>{auth ? <Link onClick={Logout} className="dropdown-item" to="/SignIn">Logout</Link> : <Link className="dropdown-item" to="/SignIn">SignIn</Link>}</li>
                                    <li>{auth ? <Link className="dropdown-item" to="/Logout"></Link> : <Link className="dropdown-item" to="/SignUp">SignUp</Link>}</li>
                                    <li></li>
                                    <li><Link className="dropdown-item" to="/UpdateProfile">Profile</Link></li>
                                    <li><Link className="dropdown-item" to="/UploadImg">ProfilePic</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/DemoSignin">Having Issue with SignIn</Link></li>
                                    <li><Link className="dropdown-item" to="/DemoSignUp">Having Issue with SignUn</Link></li>
                                    <li><Link className="dropdown-item" to="/ForgotPassword">Forgot Password</Link></li>
                                </ul>
                            </li>
                        </ul>

                        <div className={`navbar justify-content-end `}>
                            <div className="form-check form-switch mx-4">
                                <abbr title={(props.mode === "light" ? "Enable" : "Disable") + " Dark Mode"}>
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                                </abbr>
                            </div>
                        </div>
                        <form className="d-flex">
                            <Link className="nav-link active" aria-current="page" to="/"><Timer /></Link>
                        </form>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}