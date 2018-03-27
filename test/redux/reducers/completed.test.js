import * as completed from 'redux/reducers/completed';

describe('completed reducer', () => {

  it('returns completed action creator', () => {

    const expectedAction = {
      type: completed.SET_COMPLETED,
      payload: {
        data: true
      }
    }

    const actualAction = completed.setCompleted(true);
    expect(actualAction).toEqual(expectedAction);
  })
});
