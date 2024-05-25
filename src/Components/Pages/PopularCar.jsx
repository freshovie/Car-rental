import './style.scss';
import React from 'react';
import { Koenigsegg } from "../../assets";
import { FaHeart, FaGasPump } from "react-icons/fa6";
import { TbWheel } from "react-icons/tb";
import { MdPeopleAlt } from "react-icons/md";

const PopularCar = () => {
    return ( 
        <div className="popularcar">
            <div className="popularcar-head">
                <h2>Popular Cars</h2>
                <p>View all</p>
            </div>
            <div className="card">
                <div className="card-body">
                    <div className="card-head">
                   <div>
                   <h4>Koenigsegg</h4>
                    <p>Sport</p>
                   </div>
                    <FaHeart />
                    </div>
                    <img src={Koenigsegg} alt="" className='W-100' />
                    <div className="c-footer">
                        <div className="icons">
                        <FaGasPump />
                        <p>90L</p>
                        <TbWheel />
                        <p>Manual</p>
                        <MdPeopleAlt />
                        <p>2 People</p>
                        </div>
                        <div className="card-info">
                            <h3>$99.00/<span>day</span></h3>
                            <button>Rent Now</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default PopularCar;