import React, { Component, useEffect, useState } from "react";
//import AdminHome from "./adminHome";

//import UserHome from "./userHome";

export default class UserDetails extends Component {

    constructor(props){
        super(props);
        this.state = {
            userData:"",
        };
    }


    componentDidMount()
    {
      
       fetch("http://localhost:4000/userData", {
        method: "POST",
        crossDomain:true,
        headers: {
          "Content-Type": "application/json",
          Accept:"application/json",
          "Access-Control-Allow-Origin":"*"
        },
        body: JSON.stringify({
          token:window.localStorage.getItem("token")
        }),
      }).then((res)=>res.json())
        .then((data)=>{
          console.log("then inside userdetals entered")
          console.log(data,"userRegister")
          this.setState({
            userData:data.data,
          })
        })

      //const data = await response.json();
      //console.log("data is ",data)
      /*
if (response.status && response.status >= 200 && response.status < 300) {
  console.log("ifff entered")
  alert('Form submitted successfully');
} else {
  console.log("else entered")
  alert(`Failed to submit form: ${data.message}`);
} */

  
   
  };
    
    render() 
    { 
      return (
        <div>
            Name: <h1>{this.state.userData.name}</h1>
            Email: <h1>{this.state.userData.email}</h1>
        </div>
      )
    }
  

    }
