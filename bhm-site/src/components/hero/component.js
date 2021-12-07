import './component.css'
import hero from './hero_original.jpg';
import exp from './example.jpg';

function Hero() {
    return <div className="container-fluid">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 imagic" src={hero} alt="First slide" style={{objectFit:"cover", height:"600px"}}/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 imagic" src={exp} alt="Second slide" style={{objectFit:"cover", height:"600px"}}/>
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
                <h1 class="intro-text" style={{textAlign:"center",textShadow: "0.5px 0.5px 0.5px #2222226b",fontWeight:"bolder"}}>Board for Hostel Management</h1>   
            </div>
</div>

</div>
}

export default Hero;
