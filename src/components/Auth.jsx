import React from "react";
import { useState } from "react";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import firebaseLogo from "../static/firebase.png";
import { useNavigate } from "react-router-dom";

function Auth({currentEmail, setCurrentEmail}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const nav = useNavigate()
  
  const handleSignIn = async () => {
      try {
        if(email === "user@example.com" && password === "1Password") {
          await signInWithEmailAndPassword(auth, email, password)
          console.log("user signed in successfully")
          console.log(auth?.currentUser?.email)
          setCurrentEmail(email)
          console.log(currentEmail)
          if(auth.currentUser.email) {
            nav('/home')
          }
        } else {
          console.log("password and email are wrong")
        }
          
      } catch(err) {
        console.error(err)
      } 
  };

  return (
    <div >
      {/* LOGO */}
      <div id="Header" className="mt-100">
        <img src={firebaseLogo} alt="logo" width={"5%"} />
        <h4 className="l-grey">Lakad</h4>
      </div>

      {/* INPUT FIELD FOR PASSWORD AND EMAIL */}
      <div id="input filed">
        <input
          className="input-set"
          type="email"
          placeholder="Email..."
          id="email"
          onChange={(e)=> {setEmail(e.target.value)}}
        />
        {email && !email.includes('@') && 
          <p>This is not a valid email address</p>
        }
        <input
          className="input-set"
          type="password"
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          />
        <button className="btn" onClick={handleSignIn}>
          Sign in
        </button>
      </div>

      {/* LOGIN CREDENTIALS */}
      <div>
        <h5 className="l-grey mt-5">Login credentials</h5>
        <p className="l-grey m-0">Email: user@example.com</p>
        <p className="l-grey ">Password: 1Password</p>
      </div>
    </div>
  );
}

export default Auth;
