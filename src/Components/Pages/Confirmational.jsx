import React from 'react'
import { Security } from '../../assets';
import "./style.scss";

const Confirmation = () => {
  return (
    <React.Fragment>
      <div className="confirmation">
        <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
            <div className="confirmation-content">
            <div className="heading">
                    <div className="pheader">
                        <h3>Confirmation</h3>
                        <p>We are getting to the end. Just few clicks and your rental is ready!</p>
                    </div>
                    <p>Step 4 of 4</p>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="first-div">
                            <input type="checkbox" className='form-control' id='marketing' />
                            <p>I agree with sending an Marketing and newsletter emails. No spam, promissed!</p>
                        </div>
                        <div className="second-div">
                            <input type="checkbox" className='form-control' id='marketing' />
                            <p>I agree with our terms and conditions and privacy policy.</p>
                        </div>
                    </div>
                </div>
                <button>Rent Now</button>

                <img src={ Security } alt="" />
                <h4>All your data are safe</h4>
                <p>We are using the most advanced security to provide you the best experience ever.</p>
            </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Confirmation
