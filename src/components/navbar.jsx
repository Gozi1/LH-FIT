import React from 'react';
import { BsSearch, BsList, BsX } from 'react-icons/bs';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
const navbar = () => {
	let router = useRouter();
	let menuRef = useRef();
	const [mobileMenu, setMobileMenu] = useState(false);
	useEffect(() => {
      let handler = (e) =>{
        if(!menuRef.current.contains(e.target)){
          setMobileMenu(false)
        }
      }
      document.addEventListener('mousedown',handler)
  });
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
