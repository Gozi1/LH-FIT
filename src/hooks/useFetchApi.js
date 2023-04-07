import { useState, useEffect } from 'react';
import axios from 'axios';

//function to fetch data from api 
export default function useFetchApi(
	params,
  paramObj,
	url,
	method,
	SuccesFunc,
	ErrorFunc
) {
	const [mode, setMode] = useState('');
	// const [results, setResults] = useState();
	useEffect(() => {
    
		if (params) {
			setMode('LOADING');
			const options = {
				method: method,
				url: url,
				params: {...paramObj },
      }
			
			axios
				.request(options)
				.then((response) => {
          SuccesFunc(response.data)
					setMode('SHOW');
				})
				.catch((error) => {
					ErrorFunc(error);
					setMode('ERROR');
				});
		}
	}, [params]);
	return { mode };
}
