import './component.css';
import React from 'react';
import popup from '../../data/popup';


function Close() {
    return  <div className="pointer d-flex ml-auto">
            <div data-dismiss="modal" className="close-button ml-auto p-auto">
                <div className="m-auto">&#10006;</div>
            </div>

        </div>
}

function PopUp() {
    if(popup.show) return <div className="popup">
        <div class="modal" tabindex="-1" role="dialog" id="myModal">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content p-4 ">
                    <div className="row">
                        <div className={"col-12 col-md-12 "/*+"d-md-none"*/}>
                            <div className="d-flex">
                                <div className="font-weight-bold">{popup.heading}</div>
                                <Close/>
                            </div>
                            <div className="text-left mt-3 modal-text">{popup.notice}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
    else return <div/>;
}

export default PopUp