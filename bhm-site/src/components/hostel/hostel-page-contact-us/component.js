import './component.css'
function ContactUs(props) {
    console.log(props.contact)
    return <div className="contact-us">
        <div className="container py-5 ">
            <div className="heading pb-4">
                <i className="fas fa-phone-alt" style={{ fontSize: "28px", marginRight: "20px", color: "black" }}></i>Contact Us
            </div>
            <div className="container mx-2">
                <div className="row ">
                    {props.contact.map(contact=>{
                        return <div className="col-12 col-md-4 text-left my-4" style={{ paddingBottom: "0px" }}>
                        <div className="h4" style={{ fontWeight: "bold" }}>{contact.designation}</div>
                        <div className="h5" style={{ fontWeight: "bold" }}>{contact.name}</div>
                        <div className="h6" style={{ paddingBottom: "0px", marginBottom: "0px" }}>{contact.phone}</div>
                        <div className="h6" style={{ paddingTop: "0px", marginTop: "0px" }}>{contact.email}</div>
                    </div>
                    })}
                </div>
            </div>

        </div>
    </div>
}

export default ContactUs