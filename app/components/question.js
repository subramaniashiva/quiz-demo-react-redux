/*
  Question component - stateless
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/components/_question.scss';

export class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOptions : this.props.selectedOptions || []
    };
  }
  componentWillReceiveProps(nextProps) {
    // prevent unnecessary render
    if (nextProps.selectedOptions !== this.state.selectedOptions) {
      this.setState({ selectedOptions: nextProps.selectedOptions });
    }
  }
  handleOptionChange(changeEvent) {
    this.setState({
      selectedOptions: [changeEvent.target.value]
    });
    this.props.onAnswer({id: this.props.question.id, answers: [changeEvent.target.value]})
  }

  render() {
    return (
      this.props.question && this.props.question.options ?
        (
          <div className="question">
            <h4 className="question__text">{this.props.question.question}</h4>
            {this.props.question.options.map((option, index) => {
              return (
                <div key={index} className="question__option-container option-container">
                  <label className="option-container__option">
                    <input type="radio" disabled={this.props.disabled} value={option} checked={this.state.selectedOptions && this.state.selectedOptions.indexOf(option) !== -1}
                      onChange={this.handleOptionChange.bind(this)} />
                      {option}
                  </label>
                </div>
                )
            })}
        </div>
        ) : ''
    )
  }
}

Question.propTypes = {
  question: PropTypes.object,
  onAnswer: PropTypes.func,
  selectedOptions: PropTypes.array,
  disabled: PropTypes.bool
}

export default Question;
