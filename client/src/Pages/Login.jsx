import React, {useState, useEffect}  from "react";
import {BrowserRouter as  Link} from "react-router-dom";
import "./css/login.css";
import axios from "axios";

const Login = (props)=>{

    const [inputEmail,setInputEmail]=useState("");
    const [inputpass,setInputPass]=useState("");
    const [validEmail, setValidEmail] = useState("");
    const [logSuccess,setlogSuccess] = useState("");

// for validation

    const validateEmail = (email)=>{
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

// ***********


    const onchangeEmail = async (event)=>{
        setInputEmail(event.target.value);
        if(validateEmail(event.target.value)){
            setValidEmail("Valid Email..");
        }else{
            setValidEmail("Invalid Email..");
        }
    }
    const onchangePass = async (event)=>{
        setInputPass(event.target.value);
    }

    function pri(data){
        console.log("Data "+data);
        props.callback(data);
    }

    function getLogUserName(name){
        setlogSuccess(name);
        props.callbackForName(name);
    }

    function getLoggeduserId(id){
        props.callbacklogID(id);
    }


    const loginSubmit = async (event)=>{
        event.preventDefault();
        // const url = "http://localhost:8080/api/users/login";
        // headers: { "Content-Type": "multipart/form-data" },

        try {
            const token_data = await axios.post('http://localhost:8080/api/users/login',
                {
                    email:inputEmail,
                    password:inputpass
                },
                {
                    headers: { 'Content-Type':'application/json'},
                }
            )  
            getLogUserName(token_data.data.name);
            getLoggeduserId(token_data.data.id);
            pri(token_data.data.token);
        } catch (error) {
            console.log("Load Failed ! "+error);
        }
        setInputEmail("");
        setInputPass("");
    }


    return(
        <>
            <div className="backview">
                {/* <p>{token}</p> */}
                {
                    (logSuccess.length != 0)?  <h5 className="log_successMsg">{logSuccess} <span className="log_successMsg1">You are Succesfully Logged in.</span></h5>  :null
                }
                <div className="login-form">
                    <h4>Login Here ..</h4><br></br>
                    <form onSubmit={loginSubmit}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" onChange={onchangeEmail} value={inputEmail} required id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <p className="valid_email">{validEmail}</p>
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" value={inputpass} onChange={onchangePass} id="exampleInputPassword1"/>
                        </div>
                        <button type="submit" class="btn btn-outline-success">Login</button>
                    </form>
                    {/* <button class="btn btn-outline-success" onClick={logout} >Log out</button> */}
                </div>
            </div>
        </>
    );
}

export default Login;