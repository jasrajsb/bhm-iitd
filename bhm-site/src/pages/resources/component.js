import React from "react";
import './component.css';
import guest_stay from '../../assets/guest_stay.pdf';
import short_stay from '../../assets/short_stay.pdf';
import mess_req from '../../assets/mess_req.pdf';
import hostel_extn_nphd from '../../assets/hostel_extn_nphd.pdf';
import hostel_extn_phd from '../../assets/hostel_extn_phd.pdf';

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
        <div className="row gap-4">
          <div className="col my-4">
            <div className="card my-3 shadow-sm h-100" style={{minWidth:"18rem"}}>
              <div className="card-body">
                <h5 className="card-title">Application for Short Stay:</h5>
                <p className="card-text">
                Have some important work in the campus and finding it hard to commute? Fill this application for to avail short stay in hostels and apartments of IIT Delhi
                </p>
                <a href={short_stay} className="btn btn-dark btn-sm" target="_blank" rel="noreferrer">
                  Open Form
                </a>
              </div>
            </div>
          </div>
          <div className="col my-4">
            <div className="card my-3 shadow-sm h-100" style={{minWidth:"18rem"}}>
              <div className="card-body">
                <h5 className="card-title">Mess Request</h5>
                <p className="card-text">
                Not a hostel resident but still want to relish the sumptuous and delicious meals prepared served in the hostels? No problem, we've got you covered too. Fill this form to avail mess facilities
                </p>
                <a href={mess_req} className="btn btn-dark btn-sm" target="_blank" rel="noreferrer">
                  Open Form
                </a>
              </div>
            </div>
          </div>
          <div className="col my-4">
            <div className="card my-3 shadow-sm h-100" style={{minWidth:"18rem"}}>
              <div className="card-body">
                <h5 className="card-title">Application for Hostel Extension:</h5>
                <p className="card-text">
                Have some very important tasks at hand and want to stay back in the campus for some more time? Seek an extension for your stay by filling this form
                </p>
                <a href={hostel_extn_phd} className="btn btn-dark btn-sm m-1" target="_blank" rel="noreferrer">
                  Open Form (Phd)
                </a>
                <a href={hostel_extn_nphd} className="btn btn-dark btn-sm m-1" target="_blank" rel="noreferrer">
                  Open Form (Non Phd)
                </a>
              </div>
            </div>
          </div>
          <div className="col my-4">
            <div className="card my-3 shadow-sm h-100" style={{minWidth:"18rem"}}>
              <div className="card-body">
                <h5 className="card-title">Mess Rebate</h5>
                <p className="card-text">
                Going for a short vacation? Fill this form to ensure that you pay for your food only when you stay in the hostel
                </p>
                <a href={mess_rebate} className="btn btn-dark btn-sm" target="_blank" rel="noreferrer">
                  Open Form
                </a>
              </div>
            </div>
          </div>
          <div className="col my-4">
            <div className="card my-3 shadow-sm h-100" style={{minWidth:"18rem"}}>
              <div className="card-body">
                <h5 className="card-title">Mess Security</h5>
                <p className="card-text">
                Time to leave hostel? We want your memories to stay but not your mess security fees. Fill this form to claim your mess security fees
                </p>
                <a href={mess_security_refund} className="btn btn-dark btn-sm" target="_blank" rel="noreferrer">
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
