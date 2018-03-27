/*
  Answer component - stateless
*/
import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/_answer.scss';

const Answer = (props) => (
  <div className='answer'>Correct Answer is: <span className='answer__text'>{props.answer && props.answer.answers &&
    props.answer.answers.length ? props.answer.answers.join(', '): ''}</span></div>
);

Answer.propTypes = {
  answer: PropTypes.object
}

export default Answer;
