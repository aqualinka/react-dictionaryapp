import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css"

export default function Meaning(props){
   //console.log(props.meaning);
    return (
    <div className="Meaning">
       <h3 className="partofspeechWord">{props.meaning.partOfSpeech}</h3>
        <ol>
        {props.meaning.definitions.map(function(definition, index){
            return (
                <li key={index}>
                    {definition.definition}
                        <p className="exampleText">{definition.example}</p>
                        <Synonyms synonyms={definition.synonyms}/>
                   
                </li>
                );
            })}      
        </ol>
            
    </div>);
}