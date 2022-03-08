import React, { useState } from "react";
import "./component.css";
import FullCarousel from "./FullCarousel";

export default function Gallery({ images_json }) {
	const [images, setImages] = useState([]);
	const [fullCarouselOpen, setFullCarouselOpen] = useState(false);

	console.log(images_json);
	const galleryFull = s => {
		// let images1 = (s === 'Title1') ? AravaliImages : (s === 'Title2') ? GirnarImages : (s === 'Title3') ? HimadriImages : (s === 'Title4') ? JwalaImages : (s === 'Title5') ? KailashImages : [];
		let images1 = images_json[s].images;
		setImages(prevImages => images1);
		// console.log(images);
		setFullCarouselOpen(true);
		document.body.style.overflow = "hidden";
	};

	const galleryFullClose = () => {
		setFullCarouselOpen(false);
		document.body.style.overflow = "visible";
	};

	return (
		<div className="py-5">	
			<div className="heading pb-5">
               Gallery
            </div>
			<div className="gallery-grid">
				{Object.keys(images_json).map((index, key) => {
					console.log(images_json[key + 1]);
					console.log(fullCarouselOpen);
					let { title, cover_image, images1 } = images_json[key + 1];

					return (
						<div className="gallery-grid-item">
							<img
								src={cover_image}
								alt={title}
								className="gallery-grid-cover"
							/>
							<div className="gallery-grid-card ">
								<p className="gallery-grid-title">{title}</p>
								<button
									className="gallery-grid-btn"
									onClick={() => galleryFull(key + 1)}
								>
									More Images
								</button>
							</div>
						</div>
					);
				})}
				{/* <div className="gallery-grid-item">
                    <img src={AravaliImages[0]} alt="image1" className="gallery-grid-cover" />
                    <div className='gallery-grid-card '>
                        <p className='gallery-grid-title'>Title2</p>
                        <button className="gallery-grid-btn" onClick={() => galleryFull("Title2")}>More Images</button>
                    </div>
                </div> */}
			</div>
			<FullCarousel
				images={images}
				onClose={() => galleryFullClose()}
				open={fullCarouselOpen}
			/>
		</div>
	);
}
