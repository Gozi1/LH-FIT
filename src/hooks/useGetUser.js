import { useState,useEffect } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';
//function to return the user's name
export default function useGetUser() {
	const [user, setUser] = useState(null);
	const [cookies] = useCookies(['user_id']);

  useEffect(() => {
    
		if (cookies['user_id']!=='undefined') {
			const options = {
				method: 'GET',
				url: `http://localhost:8080/api/users/${cookies['user_id']}`,
				params: null,
      }
			
			axios
				.request(options)
				.then((response) => {
          // returns only the  user's name
          setUser(response.data[0].name)
				})
				.catch((error) => {
					console.log(error);
				});
		}
    else {
      setUser(null)
    }
	})
	
  
	return { user, setUser};
}
