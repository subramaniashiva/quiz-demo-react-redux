/*
  Network Error component - stateless
*/
import React from 'react';

import '../styles/components/_networkError.scss';

const NetworkError = () => (
  <div className='container network-error'>
    <p className='network-error__text'>Oops something went wrong :( No quiz found at this moment.</p>
    <p className='network-error__text'>Please check your internet connection and try again.</p>
  </div>
)

export default NetworkError;
