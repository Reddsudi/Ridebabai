import { Link } from "react-router-dom"
import SignupValidation from "./signupvalidation"
import React, {  useState } from "react";
const axios = require('axios');


export default function Signup(){
  const[values, setValues] = useState({
    Username : "",
    email : "",
    password:""

  })
  const[errors,setErrors] = useState({

  })

  const handleInput = event => {
    setValues (prev=>({...prev, [event.target.name]: [event.target.value] }))
    
  }
  const handleSubmit = event =>{
    event.preventDefault();
    setErrors(SignupValidation(values))
    if (errors.Username==="" &&  errors.email===""&& errors.password===""){
      axios.post(" http://localhost:3000/signu",values)
      .then(res=>{

      })
      .catch(err=>console.log(err));
    }
    console.log("submitting")
  }
  return(  
    
    <div class="Form">
      <form  onSubmit={handleSubmit}>
        <label class="Field">Username</label>
        <input type="text" class="Field" id="username" placeholder="Choose a unique username" name="Username"
        onChange={handleInput} 
        ></input>{errors.Username && <span class="Danger">{errors.Username}</span>}

        <label class="Field">Email Id</label>
        <input type="Email Id" class="Field" id="Email" placeholder="Enter preferred email ID" name="email"
                onChange={handleInput}
                ></input>{errors.email && <span class="Danger">{errors.email}</span>}

        <label class="Field">Password</label>
        <input type="Password" class="Field" id="password" placeholder="Enter a password" name="password"
                onChange={handleInput}
                ></input>{errors.password && <span class="Danger">{errors.password}</span>}
        <Link class="Link" to ="/">Log in</Link>
        <button type="submit">Signup</button>
        </form>
    </div>
  )





}