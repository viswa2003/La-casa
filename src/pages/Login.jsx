import React, {useState} from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login() {

	const history = useNavigate();

	const [password, setPassword] = useState('');
	const [userName, setUserName] = useState('');

	async function submit(e){
		e.preventDefault();
	
		try {
		  await axios.post("http://localhost:4578/login",{
			userName,password
		  })
		  .then(res=>{
			if(res.data==="exist"){
			  history("/welcome", {state:{id:userName}});
			}
			else if(res.data==="notexist"){
			  alert("User does not exist");
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
				<form class="login-form">
					<input type="text" onChange={(e) => {setUserName(e.target.value)}} placeholder="email" />
					<input type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="password" />
					<button onClick={submit}>login</button>
					<p class="message">Not registered? <Link to='/signup'>Sign Up</Link></p>
				</form>
			</div>
		</div>
		
	)
}