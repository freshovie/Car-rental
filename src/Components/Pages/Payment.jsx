import React from "react";
import './style.scss';


const Payment = () => {
    return ( 
        <div className="payment">
            <div className="card">
                <div className="card-body">
                    <div className="header">
                        <div>
                        <h4>Billing Info</h4>
                        <p>Please enter your billing info</p>
                        </div>
                        <p>Step 1 of 4</p>
                    </div>
                    <div className="dforms">
                    <form action="">
                        <label htmlFor="Name">Name</label>
                        <input type="text" placeholder="Your name" />
                    </form>
                    <form action="">
                        <label htmlFor="number">Phone Number</label>
                        <input type="text" placeholder="Phone number" />
                    </form>
                    <form action="">
                        <label htmlFor="address">Address</label>
                        <input type="text" placeholder="Address" />
                    </form>
                    <form action="">
                        <label htmlFor="Name">Town/City</label>
                        <input type="text" placeholder="Town or city" />
                    </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Payment;