import './component.css'
import Gallery1 from './../../assets/gallery1.webp';
import Gallery2 from "./../../assets/gallery2.webp";
import Gallery3 from "./../../assets/gallery3.webp";
import Gallery4 from "./../../assets/gallery4.webp";

function Hero() {
    return <div className="">
        <div id="carouselExampleIndicators" className="carousel slide" data-interval="1500" data-ride="carousel" data-pause="false">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 imagic" src={Gallery1} alt="First slide" style={{objectFit:"cover", height:"600px"}}/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 imagic" src={Gallery2} alt="Second slide" style={{objectFit:"cover", height:"600px"}}/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 imagic" src={Gallery3} alt="Second slide" style={{objectFit:"cover", height:"600px"}}/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 imagic" src={Gallery4} alt="Second slide" style={{objectFit:"cover", height:"600px"}}/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

<div class="main-text" style={{position:"absolute",top:"100px",width:"100%"}}>
            <div class="col-12">
                <h1 class="intro-text" style={{textAlign:"center",textShadow: "1px 1px 1px #2222226b",fontWeight:"bolder", color:'#fff'}}>Board for Hostel Management</h1>   
            </div>
</div>

</div>
}

export default Hero;
