import React from "react";

export default function Phonetic(props){
    function listenAudio(event){
        event.preventDefault();
       
        let audio = new Audio(props.phonetic.audio);
        audio.play();
    }
    return (<div className="Phonetic">
        <span>{props.phonetic.text}</span>{" "}
        <a href="/" onClick={listenAudio}>listen</a>
    </div>);
}