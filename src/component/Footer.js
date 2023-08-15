import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row mx-auto">
                        <div className="col-md-3">
                        <i className='fab fa-battle-net' />
                        <h1 className='text-danger'>ECHO
                        </h1>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <div className="social">
                                <i className='fab fa-instagram'></i>
                                <i className='fab fa-twitter'></i>
                                <i className='fab fa-facebook'></i>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h1>Pages</h1>
                            <li>
                            <Link to="/">
                            <a>Home</a>
                            </Link>
                               
                            </li>
                            <li>
                            <Link to="/about">
                            <a>about</a>
                            </Link>
                            </li>
                            <li>
                            <Link to="/services">
                            <a>services</a>
                            </Link>
                            </li>
                            <li>
                            <Link to="/contact">
                            <a>contact</a>
                            </Link>
                            </li>
                        </div>
                        <div className="col-md-3">
                            <h1>Resources</h1>
                            <li>
                            <Link to="/">
                            <a>Home</a>
                            </Link>
                               
                            </li>
                            <li>
                            <Link to="/about">
                            <a>about</a>
                            </Link>
                            </li>
                            <li>
                            <Link to="/services">
                            <a>services</a>
                            </Link>
                            </li>
                        </div>
                        <div className="col-md-3 contact">
                            <h1>Contact</h1>
                            <li>
                                <p> <i className='fas fa-envelope'></i> +91 9850502194</p>
                            </li>
                            <li>
                                <p> <i className='fas fa-phone'> </i>karanchavan2194@gmail.com</p>
                            </li>

                        </div>
                    </div>
                </div>
<hr/>
                <div className="text-center text-white">
                    Copyright © {new Date().getFullYear()} All rights reserved | This template is made by{" karan"}
                </div>
            </footer>
        </>
    )
}

export default Footer