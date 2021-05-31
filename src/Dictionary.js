import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(){
    const[keyword,setKeyword]=useState(null);
    const[results,setResults]=useState(null);

function search(event){
    event.preventDefault();

}
function getInputValue(event){
    setKeyword(event.target.value);
}

function handleResponse(response){
 setResults(response.data[0]);
 console.log(response.data[0]);
}

//https://dictionaryapi.dev/

 let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_GB/${keyword}`;
axios.get(apiUrl).then(handleResponse);

    return (
    <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" onChange={getInputValue} className="form-control"/>
        </form>
        <Results results={results}/>
    </div>
    );
}