import React, {useState} from "react";

export default function Dictionary(){
    const[keyword,setKeyword]=useState(null);

function search(event){
    event.preventDefault();
    alert(keyword);

}
function getInputValue(event){
    setKeyword(event.target.value);
}

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