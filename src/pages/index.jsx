import React from 'react';
import './index.css';

const Test = (props) => {
  const msg = 'REACT STUDY !';
  
  return (
    <div className='wrap'>
		<h1>react test</h1>
		<p>{msg}</p>
	</div>
  );
};

export default Test;