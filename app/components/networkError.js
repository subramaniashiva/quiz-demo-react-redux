/*
  Network Error component - stateless
*/
import React from 'react';

import '../styles/components/_noNewsItem.scss';

const NetworkError = () => (
  <div className='no-news-item'>
    <p>Oops something went wrong :( No quiz found at this moment.</p>
  </div>
)

export default NetworkError;
