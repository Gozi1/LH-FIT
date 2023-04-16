import React from 'react'

const Loading = (props) => {
  
  return (
    <div>
      	<img
				src='https://media4.giphy.com/media/RgzryV9nRCMHPVVXPV/giphy.gif?cid=ecf05e47dkyk1ljk4adnxtq1fwgnfroz4zt7bnkv8z50jn7t&rid=giphy.gif&ct=g'
				alt='Loading'
			/>
			<h1>{props.message}</h1>
    </div>
  )
}

export default Loading