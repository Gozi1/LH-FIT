import React from 'react';
import { BsSearch, BsList, BsX } from 'react-icons/bs';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import Image from 'next/image';
import Logo from '../../public/logo.svg';

const navbar = () => {
	const {push} = useRouter();
	const menuRef = useRef();
	const [cookies, setCookies,removeCookie] = useCookies(['user']);
	const [mobileMenu, setMobileMenu] = useState(false);
	const [user, setUser] = useState(null);

	useEffect(() => {
		let handler = (e) => {
			if (!menuRef.current.contains(e.target)) {
				setMobileMenu(false);
			}
		};
		//checks if a click on the page happened
		document.addEventListener('mousedown', handler);
		//Important you need to set the cookie you want to use to a state variable  unless you get hydration errors
		setUser(cookies.user);
	});
	return (
		<nav className='nav'>
			<section className='mobile-menu' ref={menuRef}>
				{!mobileMenu && <BsList onClick={() => setMobileMenu(true)} />}
				{mobileMenu && <BsX onClick={() => setMobileMenu(false)} />}
				{/* Logo */}
				<Image
					src={Logo}
					fill
					sizes='(max-width: 768px) 2rem,
              (max-width: 1200px) 2rem,
              33vw'
				 alt="logo"/>
				<p className='mobile-icon'>Menu</p>

				<ul className={mobileMenu ? 'mobile-menu-show' : 'mobile-menu-hide'}>
					{user&& <li>Hello {user}</li>}
					<li
						onClick={() => {
							push('/create-a-workout');
						}}
					>
						Create Workout
					</li>
					<li
						onClick={() => {
						push('/search');
						}}
					>
						Explore
					</li>
				{!user &&<><li
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
				</li></>}
				{user && <li onClick= {()=>removeCookie('user',{path:'/'})}>SignOut</li>}
				</ul>
			</section>
		</nav>
	);
};

export default navbar;
