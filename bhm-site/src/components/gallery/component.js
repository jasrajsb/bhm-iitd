import React from 'react';
import { Carousel } from 'react-bootstrap';
import AravaliImages from './AravaliImages';
import './component.css';
import GirnarImages from './GirnarImages';
import HimadriImages from './HimadriImages';
import JwalaImages from './JwalaImages';
import KailashImages from './KailashImages';
import KarakoramImages from './KarakoramImages';
import KumaonImages from './KumaonImages';
import NilgiriImages from './NilgiriImages';
import SatpuraImages from './SatpuraImages';
import ShivalikImages from './ShivalikImages';
import UdaigiriImages from './UdaigiriImages';
import VindhyachalImages from './VindhyachalImages';
import ZanskarImages from './ZanskarImages';

export default function Gallery({ hostel }) {

    let images = (hostel === 'Aravali') ? AravaliImages : (hostel === 'Girnar') ? GirnarImages : (hostel === 'Himadri') ? HimadriImages : (hostel === 'Jwala') ? JwalaImages : (hostel === 'Kailash') ? KailashImages : (hostel === 'Karakoram') ? KarakoramImages : (hostel === 'Kumaon') ? KumaonImages : (hostel === 'Nilgiri') ? NilgiriImages : (hostel === 'Satpura') ? SatpuraImages : (hostel === 'Shivalik') ? ShivalikImages : (hostel === 'Udaigiri') ? UdaigiriImages : (hostel === 'Vindhyachal') ? VindhyachalImages : (hostel === 'Zanskar') ? ZanskarImages : [];

    return (
        <div style={{ display: 'block', width: "75vw", height: "auto", margin: "auto" }}>
            {/* <div className="caraousel">
                <button id="prevBtn" onClick={prevClick}><FontAwesomeIcon icon={faArrowLeft} /></button>
                <button id="nextBtn" onClick={nextClick}><FontAwesomeIcon icon={faArrowRight} /></button>
                <div className="caraousel-slider" style={{ transform: `translateX(calc(${counter}*60vw*-1))` }}>
                    {AravaliImages.map((photo, key) => {
                        return <img src={photo} key={key}></img>
                    })}
                </div>
            </div> */}
            <Carousel fade>
                {images.map((photo, index) => {
                    return <Carousel.Item interval={2000}>
                        <img src={photo} className="d-block w-100" key={index} alt={hostel} />
                    </Carousel.Item>
                })}
            </Carousel>
        </div>
    )
}
