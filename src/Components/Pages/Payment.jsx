import React from "react";
import './style.scss'; // Importing component styles

const Payment = () => {
    return ( 
        <div className="payment"> {/* Container for the payment component */}
            <div className="card"> {/* Card container */}
                <div className="card-body"> {/* Card body */}
                    <div className="header"> {/* Header section */}
                        <div>
                            <h4>Billing Info</h4> {/* Billing information heading */}
                            <p>Please enter your billing info</p> {/* Instructions for users */}
                        </div>
                        <p>Step 1 of 4</p> {/* Step indicator */}
                    </div>
                    <div className="dforms"> {/* Container for the forms */}
                        {/* Name form */}
                        <form action="">
                            <label htmlFor="Name">Name</label> {/* Label for name input */}
                            <input type="text" placeholder="Your name" /> {/* Input field for name */}
                        </form>
                        {/* Phone number form */}
                        <form action="">
                            <label htmlFor="number">Phone Number</label> {/* Label for phone number input */}
                            <input type="text" placeholder="Phone number" /> {/* Input field for phone number */}
                        </form>
                        {/* Address form */}
                        <form action="">
                            <label htmlFor="address">Address</label> {/* Label for address input */}
                            <input type="text" placeholder="Address" /> {/* Input field for address */}
                        </form>
                        {/* Town/City form */}
                        <form action="">
                            <label htmlFor="Name">Town/City</label> {/* Label for town/city input */}
                            <input type="text" placeholder="Town or city" /> {/* Input field for town/city */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Payment;
