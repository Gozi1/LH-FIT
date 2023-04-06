import React from 'react';
import styles from '../styles/Users.module.scss'
import Error from '@/components/Error';
import { useState } from 'react';

const login = () => {
  
  const [email,setEmail] = useState('')
	const [password,setPassword] = useState('')
  const [error,setError] = useState()

	const handleSubmit = () => {
   // Check in the database if email and password is valid
    if (true) {
      setError("Invalid email or password. Please check and try again.");
    }
   
    else{
      //validates that gone into the database and user is login also user cookie exist
      //redirect to home page
      console.log()
    }

	};
	return (
		
			<div className={styles['account']}>
				<h1>Login</h1>
				<div>
					<label for='email'>Email</label>
					<input 
          type='email' 
          name='email' 
          placeholder='Enter your email'
          onChange = {(e)=>setEmail(e.target.value)} />
          </div>
				<div>
					<label for='Password'>Password</label>
					<input
						type='password'
						name='password'
						placeholder='Enter your password'
            onChange = {(e)=>setPassword(e.target.value)}
					/>
				</div>
				<button onClick={handleSubmit}>Login</button>
        {error && <Error message = {error} onCancel = {setError}/>}
			</div>
		
	);
};

export default login;
