import React from "react";
import SearchBar from "../SearchBar/SearchBar";


export default function Nav (props){
    return  <div className="container">
        <SearchBar  onSearch={props.onSearch}/>
    </div>
}