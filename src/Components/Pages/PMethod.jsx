import React from 'react'
import "./style.scss";
import { Bitcoin, MasterCard, PayPal, Visa } from "../../assets";

const PMethod = () => {
  return (
    <React.Fragment>
      <div className="pmethod">
        <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
            <div className="container">
                <div className="heading">
                    <div className="pheader">
                        <h3>Payment Method</h3>
                        <p>Please enter your payment method.</p>
                    </div>
                    <p>Step 3 of 4</p>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="credit">
                            <div className="labelfirst">
                                <input type="radio" name="Credit Card" id="cc" />
                                <p>Credit Card</p>
                            </div>
                            <div className="imgc">
                            <img src={ Visa } alt="" />
                            <img src={ MasterCard } alt="" />
                            </div>
                        </div>
                        <form action="payment" className='payments'>
                            <div className="form-group">
                                <label for="cardnumber">Card Number:</label>
                                <input type="text" className="form-control" id="cardnumber" placeholder="Enter Card Number" />
                                </div>
                                <div className="form-group">
                                    <label for="expdate">Expiration Date:</label>
                                    <input type="text" className="form-control" id="expdate" placeholder="MM/DD/YY" />
                            </div>
                            <div className="form-group">
                                <label for="cardholder">Cardholder Name:</label>
                                <input type="text" className="form-control" id="cardholder" placeholder="Enter Cardholder name" />
                            </div>
                            <div className="form-group">
                                <label for="cvv">CVC:</label>
                                <input type="text" className="form-control" id="cvc" placeholder="Enter CVC" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="pmethod-session">
                <div className="card">
                    <div className="card-body">
                        <div className="formgroup">
                            <input type="radio" className='control-form' id="paypal" name='paymentMethod'  />
                            <p>PayPal</p>
                        </div>
                        <div className="formimg">
                            <img src={ PayPal } alt="" />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="formgroup">
                            <input type="radio" className='control-form' id="bitcoin" name='paymentMethod'  />
                            <p>Bitcoin</p>
                        </div>
                        <div className="formimg">
                            <img src={ Bitcoin } alt="" />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default PMethod
