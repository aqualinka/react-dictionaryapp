import React, {useState} from "react";
import axios from "axios";

export default function Dictionary(){
    const[keyword,setKeyword]=useState(null);

function search(event){
    event.preventDefault();
    alert(keyword);

}
function getInputValue(event){
    setKeyword(event.target.value);
}

function handleResponse(response){
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
        <div>
            {keyword}
        </div>
    </div>
    );
}