import styles from '../styles/Users.module.scss';
import Error from '@/components/Error';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useRouter } from 'next/router';

const login = () => {
	const { push } = useRouter();
	const [cookies, setCookie] = useCookies(['user_id']);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [userOBJ, setUserOBJ] = useState();
	const [error, setError] = useState();

	useEffect(() => {
		if (userOBJ) {
			const options = {
				method: 'POST',
				url: 'http://localhost:8080/api/users/login',
				params: { ...userOBJ },
			};
			axios
				.request(options)
				.then((response) => {
					console.log(response.data);
					setCookie('user_id', response.data, {
						path: '/',
					});
					push('/');
				})
				.catch((error) => {
					// console.log(error.response.data.message);
					if (error.response?.data?.message) {
						setError(error.response.data.message);
					} else {
						setError('Something went wrong');
					}
				});
		}
	}, [userOBJ]);

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
