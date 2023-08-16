import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const About = () => {
  return (
    <>
      <div className="about-us container">
        <div className="container shadow">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h1>About Me</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis perspiciatis, quod eos inventore cum id tenetur culpa quo vel eveniet iusto nostrum aspernatur! Reiciendis voluptatum fuga corrupti ducimus vitae dolor?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus asperiores quas officia minus optio, placeat laboriosam quasi sunt accusamus possimus ipsa libero, nulla totam adipisci corporis vitae nam doloribus nostrum.  </p>
              <Link to="/services">
              <button className='btn btn-dark px-5'>Read More</button>
              </Link>
            </div>
            <div className="col-md-5">
            <img src="https://www.blogtyrant.com/wp-content/uploads/2011/02/best-about-us-pages.png" alt="about-img" className='img-fluid' /> 
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="card col-md-6 mt-5 position-relative overflow-hidden">
              <img src="https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/0d373b57e250525e2556015c5ad6fe84f66f2f632357a97c5de6e73043c0e0d51628682335902.jpg" alt="img-about" className='img-fluid' />
          
            <div className="text col-md-5 text-center">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, pariatur? Amet nisi enim rem vitae. Inventore rerum dolorem debitis fuga reiciendis ea hic necessitatibus ut? Deserunt quod accusamus totam quasi!</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default About