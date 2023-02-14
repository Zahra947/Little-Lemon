import { render, screen } from '@testing-library/react';
import App from './App';

describe('initializeTimes', () => {
  test('returns initialAvailableTimes', () => {
    const expected = [
      { time: '7:00 pm' },
      { time: '8:00 pm' },
      { time: '9:00 pm' },
      { time: '10:00 pm' },
    ];

    expect(initializeTimes()).toEqual(expected);
  });
});

describe('updateTimes', () => {
  test('returns the same value provided in the state', () => {
    const state = [
      { time: '7:00 pm' },
      { time: '8:00 pm' },
      { time: '9:00 pm' },
      { time: '10:00 pm' },
    ];
    const action = { type: 'update' };

    expect(updateTimes(state, action)).toEqual(state);
  });
});
