import {
	faCompress,
	faExpand,
	faPauseCircle,
	faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ReactDom from "react-dom";
// import { Carousel } from 'react-bootstrap';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./carousel-component.css";

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
	};

	if (!open) return null;
	return ReactDom.createPortal(
		<div className="carousel-modal">
			<div className="carousel-overlay">
				<div className="carousel-modal-body">
					<div className="carousel-control-btns">
						<button
							className="carousel-modal-btn"
							onClick={() => onFullScreen()}
							title="Full Screen"
						>
							{fullScreen ? (
								<FontAwesomeIcon
									icon={faCompress}
									className="fullscreen"
								/>
							) : (
								<FontAwesomeIcon
									className="fullscreen"
									icon={faExpand}
								/>
							)}
						</button>
						<button
							className="carousel-modal-btn play-pause"
							onClick={() => setAutoplay(prev => !prev)}
							title={autoplay ? "Pause" : "Play"}
						>
							{autoplay ? (
								<FontAwesomeIcon
									icon={faPauseCircle}
									className="play-pause"
								/>
							) : (
								<FontAwesomeIcon
									className="play-pause"
									icon={faPlayCircle}
								/>
							)}
						</button>
						<button
							onClick={onClose}
							className="carousel-modal-btn"
							title="Close"
						>
							&#10799;
						</button>
					</div>
					{/* <Carousel fade="true" interval={(autoplay) ? 2000 : null}>
                    {images.map((photo, index) => {
                        return <Carousel.Item>
                            <img src={photo} className="d-block w-100 gallery-images" key={index} alt="img1" />
                        </Carousel.Item>
                    })}
                </Carousel> */}
					<div className="carousel-main">
						<Carousel
							autoPlay={autoplay ? 1500 : null}
							infiniteLoop
							showThumbs={false}
						>
							{images.map((photo, index) => (
								<img
									src={photo}
									className="gallery-images"
									key={index}
									alt="img1"
								/>
							))}
						</Carousel>
					</div>
				</div>
			</div>
		</div>,
		document.getElementById("portal"),
	);
}
