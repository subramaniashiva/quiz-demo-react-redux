import * as currentQuestionIndex from 'redux/reducers/currentQuestionIndex';

describe('currentQuestionIndex reducer', () => {

  it('returns setCurrentQuestionIndex action creator', () => {

    const expectedAction = {
      type: currentQuestionIndex.SET_CURRENT_QUESTION_INDEX,
      payload: {
        data: 1
      }
    }

    const actualAction = currentQuestionIndex.setCurrentQuestionIndex(1);
    expect(actualAction).toEqual(expectedAction);
  })
});
