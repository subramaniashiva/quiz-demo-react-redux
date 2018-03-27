import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loading from '../components/loading';
import Header from '../components/header';
import Question from '../components/question';
import Button from '../components/button';
import Score from '../components/score';
import QuestionIndex from '../components/questionIndex';
import NetworkError from '../components/networkError';

import {loadQuestions} from '../redux/reducers/questions';
import {setUserAnswer} from '../redux/reducers/userAnswers';
import {setCurrentQuestionIndex} from '../redux/reducers/currentQuestionIndex';
import {loadCorrectAnswers} from '../redux/reducers/correctAnswers';

export class App extends Component {
  handleAnswer(data) {
    this.props.dispatch(setUserAnswer(data));
  }
  handlePrevious() {
    if (this.props.currentQuestionIndex >= 0) {
      this.props.dispatch(setCurrentQuestionIndex(this.props.currentQuestionIndex - 1));
    }
  }
  handleNext() {
    if (this.props.currentQuestionIndex < this.props.questions.length) {
      this.props.dispatch(setCurrentQuestionIndex(this.props.currentQuestionIndex + 1));
    }
  }
  handleSubmit() {
    this.props.dispatch(loadCorrectAnswers(this.props.userAnswers));
  }
  getSelectedOptions(questionObj) {
    const answerObj = this.props.userAnswers && this.props.userAnswers.length && this.props.userAnswers.find((answer) => answer.id === questionObj.id);
    return answerObj ? answerObj.answers : [];
  }
  componentDidMount() {
    this.props.dispatch(loadQuestions());
  }
  render () {
    return (
      <div>
        <Header />
        {
          !this.props.loading ?
          (
            this.props.questions && this.props.questions.length ?
            (
              <div className='container'>
                <Score completed={this.props.completed} score={this.props.score} />
                <QuestionIndex currentQuestion={this.props.currentQuestionIndex+1} totalQuestions={this.props.questions.length}/>
                <div className='question-container'>
                  <Question question={this.props.questions[this.props.currentQuestionIndex]}
                    onAnswer={this.handleAnswer.bind(this)}
                    disabled={this.props.completed}
                    selectedOptions={this.getSelectedOptions(this.props.questions[this.props.currentQuestionIndex])} />
                  <div className='controls-container'>
                    <Button text='Previous' onClick={this.handlePrevious.bind(this)} isDisabled={!this.props.currentQuestionIndex} />
                    <Button text='Next' onClick={this.handleNext.bind(this)} isDisabled={this.props.currentQuestionIndex === this.props.questions.length - 1} />
                  </div>
                </div>
                <div className='submit-container'>
                  <Button text='Submit Quiz' onClick={this.handleSubmit.bind(this)} isDisabled={this.props.completed} />
                </div>
                </div>
              ) : (<NetworkError />)
          ) :
          (
            <Loading />
          )
        }
      </div>
    )
  }
}

App.propTypes = {
  loading: PropTypes.bool,
  questions: PropTypes.array,
  completed: PropTypes.bool,
  correctAnswers: PropTypes.array,
  currentQuestionIndex: PropTypes.number,
  score: PropTypes.number,
  userAnswers: PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    questions: state.questions,
    completed: state.completed,
    correctAnswers: state.correctAnswers,
    currentQuestionIndex: state.currentQuestionIndex,
    score: state.score,
    userAnswers: state.userAnswers
  }
}

export default connect(
  mapStateToProps
)(App);
