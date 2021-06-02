import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props){
const [keyword,setKeyword]= useState(props.defaultKeyword);
const [results,setResults]=useState(null);
const [loaded,setLoaded]=useState(false);

function load(){
    setLoaded(true);
    search();
}
function submitForm(event){
    event.preventDefault();  
    search();
  //  alert("searching for word");  
}
function search(){
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
}

function changeInputValue(event){
    setKeyword(event.target.value);
}

function handleResponse(response){  
    setResults(response.data[0]);
}

if(loaded){
    return (<div className="Dictionary">
    <section>
        <h2>What word do you want to look up?</h2>
        <form onSubmit={submitForm}>
            <input onChange={changeInputValue} type="text" autoFocus={true} defaultValue={props.defaultKeyword} className="form-control"/>
        </form>
        <p>suggested words: sunset, yellow, book, beach..</p>
    </section>   
    <Results results={results}/>
</div>);
} else  {
    load();
    return "Loading page..";
    
}
   
}