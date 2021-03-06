import './component.css';
import {Link} from "react-router-dom";

function Footer() {
    return <div className="footer py-2">
        <div className="container mt-4">
            <div class="row ">
                <div className="col-6 col-md-2 footer_hostels">
                    <ul>
                        <span className="font-weight-bold footer-heading">Hostels</span><br />

                        <li><Link to="/hostel/aravali">Aravali</Link></li>
                        <li><Link to="/hostel/girnar">Girnar</Link></li>
                        <li><Link to="/hostel/himadri">Himadri</Link></li>
                        <li><Link to="/hostel/jwalamukhi">Jwalamukhi</Link></li>
                        <li><Link to="/hostel/kailash">Kailash</Link></li>
                        <li><Link to="/hostel/karakoram">Karakoram</Link></li>
                        <li><Link to="/hostel/kumaon">Kumaon</Link></li>
                    </ul>
                </div>
                <div className="col-6 col-md-3 footer_hostels">
                    <ul>
                        <span className="font-weight-bold">&nbsp;</span>
                        <span className="font-weight-bold">&nbsp;</span>
                        <li><Link to="/hostel/nilgiri">Nilgiri</Link></li>
                        <li><Link to="/hostel/satpura">Satpura</Link></li>
                        <li><Link to="/hostel/shivalik">Shivalik</Link></li>
                        <li><Link to="/hostel/udaigiri">Udaigiri</Link></li>
                        <li><Link to="/hostel/vindhyachal">Vindhyachal</Link></li>
                        <li><Link to="/hostel/zanskar">Zanskar</Link></li>
                    </ul>
                </div>
            </div>
            {/* </div>
        <div className="container"> */}
            {/* <div className="">
                <h3 className="font-weight-bold text-center">Contact Us</h3>
                <hr />
            </div> */}
            <div className="container">
                <div className="row">
                    <div className="">
                        <h6 className="text-left mb-2 font-weight-bold">BHM IIT Delhi</h6>
                        <ul className="nav">
                            <li className="nav-item contact-li"><Link to="/hostel/https://www.linkedin.com/company/board-for-hostel-management" className="footer-link"><i className="fa fa-linkedin contact-icon"></i></Link></li>
                            <li className="nav-item contact-li"><Link to="/hostel/https://www.instagram.com/bhmiitd/" className="footer-link"><i className="fa fa-instagram contact-icon"></i></Link></li>
                            <li className="nav-item contact-li"><Link to="/hostel/https://m.facebook.com/bhm.iitd" className="-link"><i className="fa fa-facebook  contact-icon"></i></Link></li>
                        </ul>
                        <br />
                    </div>
                    {/* <div className="col-md-6">
                    <form>
                        <fieldset className="form-group">
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                        </fieldset>
                        <fieldset className="form-group">
                            <textarea className="form-control" id="exampleMessage" placeholder="Message"></textarea>
                        </fieldset>
                        <fieldset className="form-group text-xs-right">
                            <button type="submit" className="btn btn-secondary-outline btn-lg">Submit</button>
                        </fieldset>
                    </form>
                </div> */}
                </div>
            </div>
            <hr className="m-0" />
            <div className="footer-text pt-2 text-left ">
                <span>Copyright &copy; Board for Hostel Management - IIT Delhi. All rights reserved.</span>
            </div>

        </div>
        {/* <div className="enquire mr-5">
            <Link to="/hostel/#" >Enquire Now</Link>
        </div> */}
        {/* <h5 style={{ float: "left" }} className="ml-5">Copyright &#169; 2021 BHM IIT Delhi</h5> */}
    </div>
}

export default Footer;
