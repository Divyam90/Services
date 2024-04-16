import React,{useState} from 'react'
import './signup.css';
import { RxCross1 } from "react-icons/rx";

const SignUp = ({setlogin}) => {

    const [currentState, setcurrentState] = useState("Sign Up")
  return (
    <div className="login-popup">
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <span onClick={()=>setlogin(false)}><RxCross1 size="20" /></span>
            </div>
            <div className="login-popup-input">
                {currentState==="login"?<></>: <input type="text" placeholder="Name" required />}
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
            </div>

                <button>{currentState==="Sign Up"?"Create Account":"Login"}</button>
                {currentState==="login"?<p>Create a new Account? <span onClick={()=>setcurrentState("Sign Up")}> Click Here </span></p>:<p>Already have an account? <span onClick={()=>setcurrentState("login")}>Login Here</span></p> }
        </form>
    </div>
  )
}

export default SignUp