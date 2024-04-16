import React from 'react'
import './services.css'
import {servicesData as service}  from '../../data'

const Service = () => {
  return (
    <div className="service-container">
        <div className="service-heading">Book Your Services</div>

      

           
            <div className="service-container1">
            {service.map((index)=>(
                 <div  className="style">
                    <img src={index.image} alt="" />
                
                <div className="service-card-content">
                    <h1>{index.title}</h1>
                    <p>{index.price}</p>
                </div>
                <button className="service-button">book</button>

                </div>
                 ))}
                
            </div>

        
    </div>
  )
}

export default Service