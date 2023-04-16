import styles from '../styles/Users.module.scss';
import Error from '@/components/Error';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import useFetchApi from '@/hooks/useFetchApi';
const login = () => {
	const { push } = useRouter();
	const [cookies, setCookie] = useCookies(['user_id']);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [userOBJ, setUserOBJ] = useState();
	const [error, setError] = useState();
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
		{ email, password },
		'http://localhost:8080/api/users/login',
		'POST',
		successFunc,
		errorFunc
	);

	return (
		<div className={styles['account']}>
			<h1>Login</h1>
			<div>
				<label for='email'>Email</label>
				<input
					type='email'
					name='email'
					placeholder='Enter your email'
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div>
				<label for='Password'>Password</label>
				<input
					type='password'
					name='password'
					placeholder='Enter your password'
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>

			<button onClick={() => setUserOBJ({ email: email, password: password })}>
				Login
			</button>
			{error && <Error message={error} onCancel={setError} />}
		</div>
	);
};

export default login;
