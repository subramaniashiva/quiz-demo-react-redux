/*
  Score component - stateless
*/
import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/_score.scss';

const Score = (props) => (
  props.completed ? <div className='score'>Your score is {props.score}</div>: ''
)

Score.propTypes = {
  score: PropTypes.number,
  completed: PropTypes.bool
}
export default Score;
