import * as correctAnswers from 'redux/reducers/correctAnswers';

describe('correctAnswers reducer', () => {

  it('returns setCurrectAnswers action creator', () => {

    const expectedAction = {
      type: correctAnswers.SET_CORRECT_ANSWERS,
      payload: {
        data: []
      }
    }

    const actualAction = correctAnswers.setCorrectAnswers([]);
    expect(actualAction).toEqual(expectedAction);
  })
});
