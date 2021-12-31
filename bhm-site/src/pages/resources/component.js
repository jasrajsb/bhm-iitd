import React from "react";
import './component.css';
import guest_stay from '../../assets/guest_stay.pdf';
import mess_rebate from '../../assets/mess_rebate.pdf';
import mess_security_refund from '../../assets/mess_security_refund.pdf';
import rail_concession from '../../assets/rail_concession.pdf';

export default function component() {
  return (
    <div className="resources text-justify">
      <div className="container py-5">
        <div className="heading pb-5" style={{ paddingTop: "50px" }}>
          Resources
        </div>
        <div className="row">
          <div className="col">
            <div className="card my-3 shadow-sm" style={{minWidth:"18rem"}}>
              <div className="card-body">
                <h5 className="card-title">Rail Concession</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href={rail_concession} className="btn btn-dark btn-sm" target="_blank" rel="noreferrer">
                  Open Form
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card my-3 shadow-sm" style={{minWidth:"18rem"}}>
              <div className="card-body">
                <h5 className="card-title">Mess Security Refund Form</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href={mess_security_refund} className="btn btn-dark btn-sm" target="_blank" rel="noreferrer">
                  Open Form
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card my-3 shadow-sm" style={{minWidth:"18rem"}}>
              <div className="card-body">
                <h5 className="card-title">Mess Rebate Form</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href={mess_rebate} className="btn btn-dark btn-sm" target="_blank" rel="noreferrer">
                  Open Form
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card my-3 shadow-sm" style={{minWidth:"18rem"}}>
              <div className="card-body">
                <h5 className="card-title">Guest Short Stay</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href={guest_stay} className="btn btn-dark btn-sm" target="_blank" rel="noreferrer">
                  Open Form
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
