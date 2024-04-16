import React from 'react'
import './choose.css';
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaTrophy } from "react-icons/fa"
import { TiArrowSync } from "react-icons/ti";

const Choose = () => {
  return (
    <div className="choosing">
        <div className="heading">Why to Chhose Us?</div>
        <div className="content">
            <div className="safety">
            <AiFillSafetyCertificate size="50" color="rgb(131, 105, 105)"/>
                <h3>Safety</h3>
                <p>We Check Proper details of every maid because your safety is our first priority</p>
            </div>
            <div className="safety">
            <FaTrophy size="50" color="rgb(131, 105, 105)" />
                <h3>High Quality</h3>
                <p>Only skilled maids are registered with us. As maids are personally trained by our team</p>
            </div>
            <div className="safety">
            <TiArrowSync size="50" color="rgb(131, 105, 105)" />
                <h3>Replacement for free</h3>
                <p>If the maids for any reason within 6 months of joining. we will replace the maid</p>
            </div>
        </div>

      
    </div>
  )
}

export default Choose
