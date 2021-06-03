import React from "react";
import {FaVolumeUp} from "react-icons/fa";
import "./Phonetic.css";

export default function Phonetic(props){
    function listenAudio(event){
        event.preventDefault();
       
        let audio = new Audio(props.phonetic.audio);
        audio.play();
    }
    return (<div className="Phonetic d-flex align-items-center">
        <span className="phoneticText">{props.phonetic.text}</span>{" "}
        <a href="/" onClick={listenAudio} className="btn btn-audio"><FaVolumeUp size="2em"/></a>
    </div>);
}