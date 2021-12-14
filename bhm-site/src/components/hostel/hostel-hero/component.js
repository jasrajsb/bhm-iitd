import './component.css'
// import hero from './hero_original.jpg';
// import hostel_logo from '../../../data/hostel/aravali/logo.jpg';
import React, { useEffect } from 'react';

function Hero(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    return <div>
                <div className="hostel-hero" >
                    <div className="container-fluid full-height">
                        <div className="hero-content full-height">
                            <img src={props.hero} alt="" className="img-cover hero-img"/>
                        </div>
                    </div>
                    <div className="hero-card p-4 text-left">
                        <div className="mb-4">
                        <span><img src={props.logo} alt="" className="hostel-logo"/></span>
                        <span className="hostel-name ml-2">{props.hostel} Hostel</span>
                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col mb-3">
                                    <div className="col-heading mb-2">Social</div>
                                    <a href="#" className="social mr-3">
                                        <i className="insta fa fa-instagram contact-icon" aria-hidden="true"/>
                                    </a>
                                    <a href="#" className="social">
                                        <i className="face fa fa-facebook contact-icon" aria-hidden="true"/>
                                    </a>
                                </div>
                                <div className="col mb-4">
                                    <div className="col-heading mb-2">Complain</div>
                                    <button type="button" className="btn complain">Fill Complaint Form</button>
                                </div>
                                <div className="col mb-1">
                                    <div className="col-heading mb-1">Location</div>
                                    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7219731766527!2d77.18147201500703!3d28.548075382451167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dab3fbfaa4f%3A0x9d7137c332165e6e!2sAravali%20Hostel%20Garden!5e0!3m2!1sen!2sin!4v1639408414041!5m2!1sen!2sin" allowfullscreen="" loading="lazy"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
}

export default Hero;