import * as userAnswers from 'redux/reducers/userAnswers';

describe('userAnswers reducer', () => {

  it('returns setUserAnswer action creator', () => {

    const expectedAction = {
      type: userAnswers.SET_USER_ANSWER,
      payload: {
        data: []
      }
    }

    const actualAction = userAnswers.setUserAnswer([]);
    expect(actualAction).toEqual(expectedAction);
  })
});
