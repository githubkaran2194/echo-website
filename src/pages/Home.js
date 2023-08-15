import React, { useState } from 'react'
import '../App.css'
import services from '../services'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonials from '../testimonial';
import { Link } from 'react-router-dom';



const Home = () => {
    const [data, setData] = useState(services);
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        loop:true,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      

    
    return (
        <>
            <div className="container home">
                <div className="row">
                    <div className="col-md-6">
                        <div className="text">
                            <h4>WELCOME TO OUR SITE</h4>
                            <h1>Expert SEO, SEM Services in London</h1>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <button type="button" className='btn btn-primary'>How We Work</button>
                            <button type="button" className='btn btn-danger'>Contact us</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="https://preview.colorlib.com/theme/echo/images/hero_1.png" alt="img-home" className='img-fluid' />
                    </div>
                </div>
            </div>

            {/* feature */}
            <div className="container feature">
                <div className="row justify-content-center">
                    <div className="feature-heading col-md-6 text-center">
                        <h4>FEATURES</h4>
                        <h1>Our Features</h1>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    </div>
                </div>
                <div className="row justify-content-center features text-center">
                    <div className="col-md-3 ">
                        <span></span>
                        <i className='fas fa-rocket'></i>
                        <h1>Marketing Analysis</h1>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <div className="col-md-3">
                        <span></span>
                        <i className='fab fa-keybase'></i>
                        <h1>Digital Marketing</h1>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div> <div className="col-md-3">
                        <span></span>
                        <i className='fab fa-amazon'></i>
                        <h1>Website Analysis</h1>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                </div>
            </div>

            {/* about */}

            <div className="about container mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="img col-md-6">
                        <img src="https://preview.colorlib.com/theme/echo/images/about_1.png" alt="img"
                            className='img-fluid'
                        />
                    </div>
                    <div className="text col-md-6">
                        <h4>ABOUT US</h4>
                        <h1>Why our agency?</h1>
                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                            <br /><br />
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <p> <i className='fas fa-check text-black'></i> Behind the word mountains</p>
                        <p> <i className='fas fa-check text-black'></i> Behind the word mountains</p>
                        <p> <i className='fas fa-check text-black'></i> Behind the word mountains</p>
                    </div>
                </div>
            </div>

            {/* services */}

            <div className="services container mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="text-head col-md-6 text-center">
                        <h4>services</h4>
                        <h1 className='mt-2'>OUR SERVICES</h1>
                    </div>
                    <div className="row cards justify-content-center">

                        {
                            data.map((item, index) => {
                                return (
                                    <>
                                        <div className="shadow col-md-5 card" key={index}>
                                            <span></span>
                                            <i className='fab fa-keybase'></i>
                                            <h1>{item.title}</h1>
                                            <p>{item.description}</p>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="text-center">
                       <Link to="/services">
                       <button className='btn btn-primary'>More Services</button>
                       </Link>
                    </div>
                </div>
            </div>



            {/* Testimonials */}

    <div className='container testimonials mb-5 mt-5'>
    <div className="row justify-content-center">
    <div className="testimonial-head text-center mt-2 mb-3
    ">
    <h4>Testimonials</h4>
    <h1 className='mt-2'>OUR Testimonials</h1>
    </div>
    <div className="col-md-9 shadow text-center rounded-3 bg-dark">
    <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide ">
          <img src={testimonial.img} alt="testimonial-img" className='img-fluid mx-auto' />
            <h2>{testimonial.name}</h2>
            <p className="designation">{testimonial.designation}</p>  <div className="rating">
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star-half'></i>
            <p>{testimonial.testimonial}</p>
          
            </div>
            
          </div>
       
        ))}
      </Slider>
    </div>     
    </div>
    </div>
        </>
    )
}

export default Home