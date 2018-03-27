import * as questions from 'redux/reducers/questions';

describe('questions reducer', () => {

  it('returns set_questions action creator', () => {

    const expectedAction = {
      type: questions.SET_QUESTIONS,
      payload: {
        data: []
      }
    }

    const actualAction = questions.setQuestions([]);
    expect(actualAction).toEqual(expectedAction);
  })
});
