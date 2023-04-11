import React from 'react';
import { BsSearch, BsList, BsX } from 'react-icons/bs';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

const navbar = () => {
	const router = useRouter();
	const menuRef = useRef();
	const [cookies,setCookies] = useCookies(['user']);
	

	const [mobileMenu, setMobileMenu] = useState(false);
	useEffect(() => {
      let handler = (e) =>{
        if(menuRef.current && !menuRef.current.contains(e.target)){
          setMobileMenu(false)
        }
      }
      document.addEventListener('mousedown',handler)
  },[mobileMenu]);
	return (
		<nav className='nav'>
			<div className='mobile-menu' ref={menuRef}>
				{!mobileMenu && <BsList onClick={() => setMobileMenu(true)} />}
				{mobileMenu && <BsX onClick={() => setMobileMenu(false)} />}
				<a className='mobile-icon'>Menu</a>

				<ul
					className={mobileMenu ? 'mobile-menu-show' : 'mobile-menu-hide'}
					
				>
					<li
						onClick={() => {
							router.push('/create-a-workout');
						}}
					>
						Create Workout
					</li>
					{cookies.user && <li>Hello {cookies.user}!</li>}
					<li
						onClick={() => {
							router.push('/search');
						}}
					>
						Explore
					</li>
					<li
						onClick={() => {
							router.push('/login');
						}}
					>
						Login
					</li>
					<li
						onClick={() => {
							router.push('/signup');
						}}
					>
						SignUp
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default navbar;
