import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props){
   //console.log(props.meaning);
    return (
    <div className="Meaning">
       <h3>{props.meaning.partOfSpeech}</h3>
   
            {props.meaning.definitions.map(function(definition, index){
            return (
                <div key={index}>
                    <div><strong>Definition: </strong>{definition.definition}</div>
                        <div>Example:{definition.example}</div>
                        <Synonyms synonyms={definition.synonyms}/>
                   
                </div>
                );
            })}      
    </div>);
}