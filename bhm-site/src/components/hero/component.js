import './component.css'
import hero from './hero_original.jpg';
function Hero() {
    return <div>
        
            <div className="hero">
                <div className="container-fluid full-height">
                    <div className="hero-content full-height">
                        <img src={hero} alt="" className="img-cover" />
                    </div>
                </div>
            </div>
        </div>
}

export default Hero;