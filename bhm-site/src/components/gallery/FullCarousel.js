import { faCompress, faExpand, faPauseCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import ReactDom from 'react-dom';
import './component.css';

export default function FullCarousel({ images, onClose, open }) {
    const [autoplay, setAutoplay] = useState(false);
    const [fullScreen, setFullScreen] = useState(false);

    const onFullScreen = () => {
        setFullScreen(prev => !prev);
        if (!fullScreen && document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (fullScreen && document.exitFullscreen) {
            document.exitFullscreen();
        }
    }

    if (!open) return null;
    return ReactDom.createPortal(
        <>
            <div className="carousel-overlay" />
            <div className='carousel-modal'>

                <button className="carousel-model-btn fullscreen" onClick={() => onFullScreen()} title="Full Screen">{
                    (fullScreen) ? <FontAwesomeIcon icon={faCompress} className='fullscreen' /> : <FontAwesomeIcon className='fullscreen' icon={faExpand} />
                }</button>
                <button className="carousel-model-btn play-pause" onClick={() => setAutoplay(prev => !prev)} title={autoplay ? "Pause" : "Play"}>{
                    (autoplay) ? <FontAwesomeIcon icon={faPauseCircle} className='play-pause' /> : <FontAwesomeIcon className='play-pause' icon={faPlayCircle} />
                }</button>
                <button onClick={onClose} className='carousel-modal-btn'>&#10799;</button>
                <Carousel fade="true" interval={(autoplay) ? 2000 : null}>
                    {images.map((photo, index) => {
                        return <Carousel.Item>
                            <img src={photo} className="d-block w-100 gallery-images" key={index} alt="img1" />
                        </Carousel.Item>
                    })}
                </Carousel>
            </div>
        </>
        , document.getElementById('portal'))
}

// style={{ display: 'block', width: "75vw", height: "auto", margin: "auto", paddingBottom: "5rem" }}
