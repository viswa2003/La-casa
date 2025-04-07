import React, {useState} from 'react'

import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


export default function Signup() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');

    const history = useNavigate();

  async function submit(e){
    e.preventDefault();

    try {
      await axios.post("http://localhost:4578/signup",{
        email,password,userName
      })
      .then(res=>{
        if(res.data==="exist"){
          alert("User already exists");
        }
        else if(res.data==="notexist"){
          history("/welcome", {state:{id:userName}});
        }
      })
      .catch(e=>{
        alert("Wrong details");
        console.log(e);
      })
    } catch (error) {
      console.log(error);
    }
  }

    return (
        <div class="login-page">
            <div class="form">
                <form action='post' class="login-form">
                    <input type="text"  onChange={(e) => {setEmail(e.target.value)}} placeholder="name" />
                    <input type="password"  onChange={(e) => {setPassword(e.target.value)}} placeholder="password" />
                    <input type="text"  onChange={(e) => {setUserName(e.target.value)}} placeholder="email address" />
                    <button onClick={submit}>create</button>
                    <p class="message">Already registered? <Link to='/login'>Login</Link></p>
                </form>
            </div>
        </div>
    )
}