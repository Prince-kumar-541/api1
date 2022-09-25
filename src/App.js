import { useState, useEffect } from "react";
import React from "react";
import Component from "./Component";

const App = () =>{

  const [newData, setData]=useState([]);

    useEffect(()=>{
    fetch('https://reqres.in/api/users?page=2').then(
        response => {
        return response.json();
        }
    ).then(
        data => {
        console.log(data.data[0].avatar);
        // console.log(data.data[1].id);
        setData(data.data);
        // console.log("hi");
        }
    );
    },[]);

    return(
        <div>
            {/* <img src={newData} alt="" style={{width:"300px"}}></img> */}
            <Component items = {newData}/>
        </div>
    );

}

export default App;