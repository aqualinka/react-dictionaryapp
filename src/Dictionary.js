import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(){
const [keyword,setKeyword]= useState("");
const [results,setResults]=useState(null);

function submitForm(event){
    event.preventDefault();  
    alert("submitted");

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
}
function changeInputValue(event){
    setKeyword(event.target.value);
}
function handleResponse(response){
   
setResults(response.data[0]);
}

    return (<div className="Dictionary">
        <form onSubmit={submitForm}>
        <input onChange={changeInputValue} type="text" autoFocus={true} className="form-control"/>
        </form>
        <Results results={results}/>
    </div>);
}