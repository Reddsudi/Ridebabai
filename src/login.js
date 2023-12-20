import './fido dido.jpg'
import './App.css';
import LoginValidation from './LoginValidation';
import { Link } from 'react-router-dom';
import React, {  useState } from "react";

export default function Login() {
     const[values, setValues] = useState({
        email: '',
        password: '',
     })
      const [errors, setErrors] = useState({})
     const handleSubmit = (event)=>{
        event.preventDefault();
        setErrors(LoginValidation(values));
     }
     const handleInput= (event)=>{
       setValues(prev=>({...prev, [event.target.name]: [event.target.value]}))
      
     }
  return (
    <div>
      <header className="Form"> 
       
        <img src="fido dido.jpg" alt="ride babai" />
        <p>
           <code></code> Ride or die!
        </p>
       <form onSubmit={handleSubmit}>
        <div>
          <input class="Field"  type='Email Id' id="Email Id" placeholder='Email Id' onChange={handleInput} name="email"></input>
          {errors.email && <span class="Danger">{errors.email}</span>}
          </div>    
        <div>
          <input class="Field"  type='password' id="password" placeholder='Password' onChange={handleInput} name="password"></input>
          {errors.password && <span class="Danger">{errors.password}</span>}

          </div>

        <button
          className="Button"
          type="Submit"
          onclick="location.href='http://www.google.com'"        
             
        >
Sign in</button>
</form> 
<Link class="Link" to="/signup">Sign up</Link>
      </header>
    </div>
  );
}


