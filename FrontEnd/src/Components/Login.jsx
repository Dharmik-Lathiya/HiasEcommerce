import React from 'react'
import "./Login.css"
import { useEffect } from 'react';





export default function Login() {



  function LogIn(e){

    e.preventDefault();
    let formData = { 
    
      email :  e.target[0].value,
     
      password :  e.target[1].value,   
    }

    console.log(formData);
    
    fetch("http://localhost:3000/user/login",{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    }).then((res)=>{

        res.json().then(data =>{
          console.log(data);
          
        })
        
    }).catch((err)=>{
      console.log(err)
    })

}

  function SingnUp(e){

      e.preventDefault();
      let formData = { 
        name :  e.target[0].value,
        email :  e.target[1].value,
        mobile :  e.target[2].value,
        password :  e.target[3].value,   
      }

      console.log(formData);
      
      fetch("http://localhost:3000/user/singup",{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      }).then((res)=>{

          res.json().then(data =>{
            console.log(data);
            
          })
          
      }).catch((err)=>{
        console.log(err)
      })

  }
    

  useEffect(() => {
    const loginText = document.querySelector(".title-text .login");
    const loginForm = document.querySelector("form.login");
    const loginBtn = document.querySelector("label.login");
    const signupBtn = document.querySelector("label.signup");
    const signupLink = document.querySelector("form .signup-link a");

    signupBtn.onclick = () => {
      loginForm.style.marginLeft = "-50%";
      loginText.style.marginLeft = "-50%";
    };
    loginBtn.onclick = () => {
      loginForm.style.marginLeft = "0%";
      loginText.style.marginLeft = "0%";
    };
    signupLink.onclick = () => {
      signupBtn.click();
      return false;
    };
}, []);
    return (
    <div className="wrapper">
    <div className="title-text">
      <div className="title login">Login Form</div>
      <div className="title signup">Signup Form</div>
    </div>
    <div className="form-container">
      <div className="slide-controls">
        <input type="radio" name="slide" id="login" checked/>
        <input type="radio" name="slide" id="signup"/>
        <label for="login" className="slide login">Login</label>
        <label for="signup" className="slide signup">Signup</label>
        <div className="slider-tab"></div>
      </div>
      <div className="form-inner">
        <form action="#" className="login" onSubmit={LogIn}>
          <div className="field">
            <input type="text" placeholder="Email Address" required/>
          </div>
          <div className="field">
            <input type="password" placeholder="Password" required/>
          </div>
          <div className="pass-link"><a href="#">Forgot password?</a></div>
          <div className="field btn">
            <div className="btn-layer"></div>
            <input type="submit" value="Login"/>
          </div>
          <div className="signup-link">Not a member? <a href="">Signup now</a></div>
        </form>

        <form action="#" className="signup" onSubmit={SingnUp}>
          <div className="field">
            <input type="text" placeholder="Enter Name" required />
          </div>
          <div className="field">
            <input type="text" placeholder="Email Address" required/>
          </div>
          <div className="field">
            <input type="tel" placeholder="Mobile number" required />
          </div>
          <div className="field">
            <input type="password" placeholder=" password" required/>
          </div>
          <div className="field btn">
            <div className="btn-layer"></div>
            <input type="submit" value="Signup"  />
          </div>
        </form>
      </div>
    </div>
  </div>


    
  );
}
