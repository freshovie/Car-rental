import React from 'react'

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
                        <form action="payment">
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
            </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default PMethod
