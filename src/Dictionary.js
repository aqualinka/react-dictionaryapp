import React from "react";

export default function Dictionary(){
function submitForm(event){
    event.preventDefault();  
    alert("submitted");
}
function changeInputValue(event){
    console.log(event.target.value);
}

    return (<div className="Dictionary">
        <form onSubmit={submitForm}>
        <input onChange={changeInputValue} type="text" autoFocus={true} className="form-control"/>
        </form>

    </div>);
}