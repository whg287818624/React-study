import React from 'react';
import './index.css';
import User from '../components/user.jsx';
import {post} from '../utils/request.jsx';

const Test = (props) => {
  const msg = 'REACT STUDY !';
  console.log(props);
  if(!props){
	post('');
  }
  
  return (
    <div className='wrap'>
		<h1>{msg}</h1>
		
		<User />
	</div>
  );
};

export default Test;