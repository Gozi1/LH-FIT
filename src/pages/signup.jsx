import React from 'react';
import styles from '../styles/Users.module.scss'
import Error from '@/components/Error';
import { useState } from 'react';

const signup = () => {
  const [name,setName] = useState('')
	const [email,setEmail] = useState('')
	const [password,setPassword] = useState('')
	const [error,setError] = useState()

  const handleSubmit = () => {
		if(!/^[A-Za-z]+(\s[A-Za-z]+)*$/.test(name)){
			setError("Invalid full name")
		}
		else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Invalid email address");
    }
    // Check if password is valid
    else if (password.length < 8) {
      setError("Password must be at least 8 characters long");
    }
    else{
      console.log()
    }
	};
	return (
		<div className={styles['account']}>
			<h1>Sign Up</h1>
      <div>
			<label for='name'>Full Name</label>
			<input 
			type='name' 
			placeholder='Enter First and Last Name' 
			onChange = {(e)=>setName(e.target.value)}/>
      </div>
      <div>
			<label for='email'>Email</label>
			<input 
			type='email' 
			placeholder='Enter your email' 
			onChange = {(e)=>setEmail(e.target.value)}/>
      </div>
      <div>
			<label for='longURL'>Password</label>
			<input 
			type='password' 
			placeholder='Create your password' 
			onChange = {(e)=>setPassword(e.target.value)}/>
        </div>
			<button onClick={handleSubmit}>Register</button>
			{error && <Error message = {error} onCancel = {setError}/>}
		</div>

	);
};

export default signup;
