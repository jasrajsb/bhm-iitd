import './component.css'
function ContactUs() {
    return <div className="contact-us">
        <div className="container py-5 ">
            <div className="heading pb-4">
                <i className="fas fa-phone-alt" style={{ fontSize: "28px", marginRight: "20px", color: "black" }}></i>Contact Us
            </div>
            <div className="container mx-2">
                <div className="row ">
                    <div className="col-12 col-md-4 text-left">
                        <div className="h4" style={{ fontWeight: "bold" }}>Caretaker</div>
                        <div className="h5" style={{ fontWeight: "bold" }}>John Doe</div>
                        <div className="h6" style={{ paddingBottom: "0px", marginBottom: "0px" }}>9876543210</div>
                        <div className="h6" style={{ paddingTop: "0px", marginTop: "0px" }}>caretaker@iitd.ac.in</div>
                    </div>
                    <div className="col-12 col-md-4 text-left">
                        <div className="h4" style={{ fontWeight: "bold" }}>Caretaker</div>
                        <div className="h5" style={{ fontWeight: "bold" }}>John Doe</div>
                        <div className="h6" style={{ paddingBottom: "0px", marginBottom: "0px" }}>9876543210</div>
                        <div className="h6" style={{ paddingTop: "0px", marginTop: "0px" }}>caretaker@iitd.ac.in</div>
                    </div>
                    <div className="col-12 col-md-4 text-left" style={{ paddingBottom: "0px" }}>
                        <div className="h4" style={{ fontWeight: "bold" }}>Caretaker</div>
                        <div className="h5" style={{ fontWeight: "bold" }}>John Doe</div>
                        <div className="h6" style={{ paddingBottom: "0px", marginBottom: "0px" }}>9876543210</div>
                        <div className="h6" style={{ paddingTop: "0px", marginTop: "0px" }}>caretaker@iitd.ac.in</div>
                    </div>
                </div>
            </div>

        </div>
    </div>
}

export default ContactUs