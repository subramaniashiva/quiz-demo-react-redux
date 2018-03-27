/*
  Score component - stateless
*/
import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/_questionIndex.scss';

const QuestionIndex = (props) => (
  props.totalQuestions ? <div className='question-index'>Question: {props.currentQuestion}/{props.totalQuestions}</div>: ''
)

QuestionIndex.propTypes = {
  currentQuestion: PropTypes.number,
  totalQuestions: PropTypes.number
}
export default QuestionIndex;
