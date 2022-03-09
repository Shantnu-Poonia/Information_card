import React from "react";
import "./interest.css";
import {SiRiotgames} from 'react-icons/si';
import {DiReact} from 'react-icons/di';
import {BsYoutube} from 'react-icons/bs';
import {FcReading} from 'react-icons/fc';


export default function Interest() {
    return (
        <div className="interest">
            <h3 id="interest_text">Interests</h3>
            <span className="logo"> <DiReact />  </span>
            <span className="logo"> <FcReading /> </span>
            <span className="logo"> <BsYoutube /> </span>
            <span className="logo"><SiRiotgames /> </span>
        </div>
    )
}