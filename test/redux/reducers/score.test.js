import * as score from 'redux/reducers/score';

describe('score reducer', () => {

  it('returns setScore action creator', () => {
    const testScore = 10;
    const expectedAction = {
      type: score.SET_SCORE,
      payload: {
        data: testScore
      }
    }

    const actualAction = score.setScore(testScore);
    expect(actualAction).toEqual(expectedAction);
  })
});
