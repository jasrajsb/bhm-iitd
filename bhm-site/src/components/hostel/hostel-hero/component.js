import './component.css'
import React, { useEffect } from 'react';

function Hero(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    return <div>
                <div className="hostel-hero" >
                    <div className="container-fluid full-height">
                        <div className="hero-content">
                            <img src={props.hero} alt="" className="img-cover hero-img" loading="lazy"/>
                        </div>
                    </div>
                    <div className="hero-card p-4 text-left">
                        <div className="mb-4">
                        <span><img src={props.logo} alt="" className="hostel-logo" loading="lazy"/></span>
                        <span className="hostel-name ml-2">{props.hostel} Hostel</span>
                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col mb-3">
                                    <div className="col-heading mb-2">Social</div>
                                    <a href={props.insta} className="social mr-3" target="_blank">
                                        <i className="insta fa fa-instagram contact-icon" aria-hidden="true"/>
                                    </a>
                                    <a href={props.fb} className="social" target="_blank">
                                        <i className="face fa fa-facebook contact-icon" aria-hidden="true"/>
                                    </a>
                                </div>
                                <div className="col mb-4">
                                    <div className="col-heading mb-2">Complain</div>
                                    <button type="button" className="btn complain"> <a href={props.complaint} className="complain_link" target="_blank">Fill Complaint Form</a></button>
                                </div>
                                <div className="col mb-1">
                                    <div className="col-heading mb-1">Location</div>
                                    <iframe className="map" src={props.location} allowfullscreen="" loading="lazy"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
}

export default Hero;