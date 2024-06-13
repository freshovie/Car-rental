import React from "react";

const Showmore = () => {
    return ( 
        <div className="showmore"> {/* Container for the Showmore component */}
            <div className="row"> {/* Row within the container */}
                <div className="col-sm-12 col-md-12 col-lg-1"></div> {/* Empty column for spacing */}
                <div className="col-sm-12 col-md-12 col-lg-10"> {/* Column containing the button and car count */}
                    <button className="showmore-btn">Show more car</button> {/* Button to load more cars */}
                    <p style={{ textAlign: 'end', color: '#90a3bf'}}>120 Car</p> {/* Text indicating total number of cars */}
                </div>
                <div className="col-sm-12 col-md-12 col-lg-1"></div> {/* Empty column for spacing */}
            </div>
        </div>
     );
}
 
export default Showmore;
