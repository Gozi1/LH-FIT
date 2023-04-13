import React from 'react';
import {  BsList, BsX } from 'react-icons/bs';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import axios from 'axios';
const navbar = () => {
	const {push} = useRouter();
	const menuRef = useRef();
	const [cookies,setCookies] = useCookies(['user_id']);
	const [user,setUser] = useState()

	const [mobileMenu, setMobileMenu] = useState(false);



	useEffect(() => {
		//  user in the nav menu credentials
		if(cookies['user_id']){
			const options = {
      method: 'GET',
      url: `http://localhost:8080/api/users/${cookies['user_id']}`,
      // params: {id:cookies['user_id']}
    }
    axios.request(options)
      .then((response) => {
        setUser(response.data[0].name)
      }).catch((error) => {
				console.log(error.response.data.message)
			});}
	},[])


	useEffect(() => {
		
			//handles the click outside of the menu
      let handler = (e) =>{
        if(!menuRef.current.contains(e.target)){
          setMobileMenu(false)
        }
      }
      document.addEventListener('mousedown',handler)
  },[mobileMenu]);

	return (
		<nav className='nav' ref={menuRef}>
			<div className='mobile-menu' >
				{!mobileMenu && <BsList onClick={() => setMobileMenu(true)} />}
				{mobileMenu && <BsX onClick={() => setMobileMenu(false)} />}
				<a className='mobile-icon'>Menu</a>

				<ul
					className={mobileMenu ? 'mobile-menu-show' : 'mobile-menu-hide'}
					
				>
					<li
						onClick={() => {
							push('/create-a-workout');
						}}
					>
						Create Workout
					</li>
					{user&& <li>Hello {user}!</li>}
					<li
						onClick={() => {
							push('/search');
						}}
					>
						Explore
					</li>
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
				</ul>
			</div>
		</nav>
	);
};

export default navbar;
