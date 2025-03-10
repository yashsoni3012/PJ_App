import React from "react";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/PJlogo.png";

const Navbar = () => {
    return (
        <div className="navigationbar">
            <nav class="navbar navbar-expand-lg navbar-light bg-light p-0">
                <div class="container-fluid">
                    <a href="#">
                        <div>
                            <img src={logo} alt="Logo" />
                        </div>
                    </a>

                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav m-auto mb-2 mb-lg-0 fs-5">
                            <button className="btn btn-success">
                                <Link to=""></Link>
                                App Store
                            </button>
                            <Link to="/">HOME</Link>
                            <Link to="treatment">TREATMENT</Link>
                            <Link to="aboutus">ABOUT US</Link>
                            <Link to="aboutus">CONTACT US</Link>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="checkup text-center d-flex justify-content-center">
                <button><i class="fa-solid fa-file-medical"></i> HEALTH CHECKUP</button>
            </div>
        </div>
    );
};

export default Navbar;
