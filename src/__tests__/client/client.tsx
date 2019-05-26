import App from '@app/client/app';
import mockAxios from 'jest-mock-axios';
import * as React from 'react';
import { cleanup, render, fireEvent } from 'react-testing-library';

afterEach(() => {
    cleanup();
    mockAxios.reset();
});

test('Client Side Render', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
});

test('Makes request when input is greater than 3', () => {
    const { getByLabelText } = render(<App />);
    const $input = getByLabelText('Enter a number');

    fireEvent.change($input, {
        target: {
            value: 10,
        },
    });

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
});

test('Does\'nt make request when input is less than 3', () => {
    const { getByLabelText } = render(<App />);
    const $input = getByLabelText('Enter a number');

    fireEvent.change($input, {
        target: {
            value: 2,
        },
    });

    expect(mockAxios.get).toHaveBeenCalledTimes(0);
});
