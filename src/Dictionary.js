import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css"

export default function Dictionary(props){
const [keyword,setKeyword]= useState(props.defaultKeyword);
const [results,setResults]=useState(null);
const [loaded,setLoaded]=useState(false);
const [photos,setPhotos]=useState(null);

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

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=12`; 
    let pexelsApiKey= `563492ad6f917000010000018a6b71beefa5435787a5baa9f53c207e`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
}

function changeInputValue(event){
    setKeyword(event.target.value);
}

function handleResponse(response){  
    setResults(response.data[0]);
}
function handlePexelsResponse(event){
    setPhotos(event.data.photos);
}

if(loaded){
    return (<div className="Dictionary">
    <section>
        <h2 className="secondheading">What word do you want to look up?</h2>
        <p>
        <form onSubmit={submitForm}>
            <input onChange={changeInputValue} type="text" autoFocus={true} defaultValue={props.defaultKeyword} className="form-control"/>
        </form>
        </p>
        <p className="hint">suggested words: sunset, yellow, book, beach..</p>
    </section>   
    <Results results={results}/>
    <Photos photos={photos}/>
</div>);
} else  {
    load();
    return "Loading page..";
    
}
   
}