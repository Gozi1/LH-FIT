import React from 'react';
import styles from '../styles/Users.module.scss';
import Error from '@/components/Error';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import useFetchApi from '@/hooks/useFetchApi';

const signup = () => {
	const { push } = useRouter();
	const [cookies, setCookie] = useCookies(['user_id']);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState();
	const [userOBJ, setUserOBJ] = useState();
	// Success function to set cookie and redirect to home page
	const successFunc = (data) => {
		setCookie('user_id', data, {
			path: '/',
		});
		push('/');
	};
	// Error function to set error message
	const errorFunc = (error) => {
		if (error.response?.data?.message) {
			setError(error.response.data.message);
		} else {
			setError('Something went wrong');
		}
	};

	//fetch data from api
	const { mode } = useFetchApi(
		userOBJ,
		{ name, email, password },
		'http://localhost:8080/api/users/',
		'POST',
		successFunc,
		errorFunc
	);
	// Check if params are valid
	const handleSubmit = () => {
		setError(null);
		if (!/^[A-Za-z]+(\s[A-Za-z]+)*$/.test(name)) {
			setError('Invalid full name');
		} else if (!/^\S+@\S+\.\S+$/.test(email)) {
			setError('Invalid email address');
		}
		// Check if password is valid
		else if (password.length < 8) {
			setError('Password must be at least 8 characters long');
		} else {
			setUserOBJ({ name: name, email: email, password: password });
		}
	};
	return (

		<div className='sign-up-page'>
			<div className={styles['account']}>
			<h1>Sign Up</h1>
			<div>
				<label for='name'>Full Name</label>
				<input
					type='name'
					placeholder='Enter First and Last Name'
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div>
				<label for='email'>Email</label>
				<input
					type='email'
					placeholder='Enter your email'
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div>
				<label for='longURL'>Password</label>
				<input
					type='password'
					placeholder='Create your password'
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<button onClick={handleSubmit}>Register</button>
			{error && <Error message={error} onCancel={setError} />}
		</div>
		</div>
	);
};

export default signup;
