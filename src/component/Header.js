import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Header = () => {
    return (
        <>
            <nav className="navbar container navbar-expand-md">
                <a className="navbar-brand" href="#">Echo</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link to="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/about">
                                <a>About</a>
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/services">
                                <a>Services</a>
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/services">
                                <a>FAQ</a>
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/services">
                                <a>Contact Us</a>
                            </Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    )
}


export default Header