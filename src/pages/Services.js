import React from 'react'
import services from '../servicesData'

const Services = () => {
  return (
<>
            <div className="services container mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="text-head col-md-6 text-center">
                        <h4>services</h4>
                        <h1 className='mt-2'>OUR SERVICES</h1>
                    </div>
                    <div className="row cards justify-content-center">

                        {
                            services.map((item, index) => {
                                return (
                                    <>
                                        <div className="shadow col-md-5 card" key={index}>
                                            <span></span>
                                            <i className='fab fa-keybase'></i>
                                            <h1>{item.service_name}</h1>
                                            <p>{item.description}</p>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div></>
  )
}

export default Services