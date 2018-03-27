/*
  Button component - stateless
*/
import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/_button.scss';

const Button = (props) => (
  <button className='button' onClick={props.onClick} disabled={props.isDisabled}>
    {props.text}
  </button>
)

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool
}

export default Button;
