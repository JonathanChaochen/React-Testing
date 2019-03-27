import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import { get } from 'https';
import NewMovie from './NewMovie';

afterEach(cleanup);

test('<NewMovie />', () => {
  const { debug, getByTestId, queryByTestId } = render(<NewMovie />);
  const hq = getByTestId('page-title');
  // console.log(getAllByTestId('page-title'));
  expect(hq.textContent).toBe('New Movie');
  expect(queryByTestId('movie-form')).toBeTruthy();
  debug();
});
