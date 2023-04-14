import React from 'react';
import { BsList, BsX } from 'react-icons/bs';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import Image from 'next/image';
import Logo from '../../public/logo.svg';
const navbar = () => {
	const { push } = useRouter();
	const menuRef = useRef();
	const [cookies, removeCookie] = useCookies(['user_id']);
	const [user, setUser] = useState();

	const [mobileMenu, setMobileMenu] = useState(false);

	const handleLogout = () => {
		removeCookie('user_id');
		setUser(null);
	};

	useEffect(() => {
		//  user in the nav menu credentials
		if (cookies['user_id']) {
			const options = {
				method: 'GET',
				url: `http://localhost:8080/api/users/${cookies['user_id']}`,
				// params: {id:cookies['user_id']}
			};
			axios
				.request(options)
				.then((response) => {
					setUser(response.data[0].name);
				})
				.catch((error) => {
					console.log(error.response);
				});
		}
	});

	useEffect(() => {
		//handles the click outside of the menu
		let handler = (e) => {
			if (!menuRef.current.contains(e.target)) {
				setMobileMenu(false);
			}
		};
		document.addEventListener('mousedown', handler);
	}, [mobileMenu]);

	return (
		<nav className='nav' ref={menuRef}>
			<div className='mobile-menu'>
				{!mobileMenu && <BsList onClick={() => setMobileMenu(true)} />}
				{mobileMenu && <BsX onClick={() => setMobileMenu(false)} />}
				<Image
					src={Logo}
					fill
					sizes='(max-width: 768px) 2rem,
              (max-width: 1200px) 2rem,
              33vw'
					alt='logo'
				/>
				<p className='mobile-icon'>Menu</p>

				<ul className={mobileMenu ? 'mobile-menu-show' : 'mobile-menu-hide'}>
					{user && <li>Hello {user}</li>}
					<li
						onClick={() => {
							push('/create-a-workout');
						}}
					>
						Create Workout
					</li>
					<li
						onClick={() => {
							push('/explore');
						}}
					>
						Explore
					</li>
					{user && (
						<li
							onClick={() => {
								push('/my-routines');
							}}
						>
							My Routines
						</li>
					)}

					{!user && (
						<>
							<li
								onClick={() => {
									push('/login');
								}}
							>
								Login
							</li>
							<li
								onClick={() => {
									push('/signup');
								}}
							>
								SignUp
							</li>
						</>
					)}
					{user && <li onClick={handleLogout}>SignOut</li>}
				</ul>
			</div>
		</nav>
	);
};

export default navbar;
